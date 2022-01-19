import { CurrencyAmount, Token } from '@uniswap/sdk-core'

import { SupportedChainId } from 'constants/chains'
import { GNO, GpEther, USDC_BY_CHAIN, V_COW } from 'constants/tokens'

import {
  CLAIMS_REPO,
  ClaimType,
  ClaimTypePriceMap,
  FREE_CLAIM_TYPES,
  PAID_CLAIM_TYPES,
  RepoClaims,
  TypeToPriceMapper,
  UserClaims,
  VCowPrices,
} from 'state/claim/hooks/index'

/**
 * Helper function to check whether any claim is an investment option
 *
 * @param claims
 */
export function hasPaidClaim(claims: UserClaims | null): boolean {
  return Boolean(claims?.some((claim) => PAID_CLAIM_TYPES.includes(claim.type)))
}

/**
 * Helper function to check whether any claim is an airdrop option
 *
 * @param claims
 */
export function hasFreeClaim(claims: UserClaims | null): boolean {
  return Boolean(claims?.some((claim) => FREE_CLAIM_TYPES.includes(claim.type)))
}

/**
 * Helper function to transform data as coming from the airdrop claims repo onto internal types
 *
 * Namely, converting types from their string representations to the enum numbers:
 * Airdrop -> 0
 */
export function transformRepoClaimsToUserClaims(repoClaims: RepoClaims): UserClaims {
  return repoClaims.map((claim) => ({ ...claim, type: ClaimType[claim.type] }))
}

/**
 * Helper function to return an array of investment option claims
 *
 * @param claims
 */
export function getPaidClaims(claims: UserClaims): UserClaims {
  return claims?.filter((claim) => PAID_CLAIM_TYPES.includes(claim.type))
}

/**
 * Helper function to return an array of free claims
 *
 * @param claims
 */
export function getFreeClaims(claims: UserClaims): UserClaims {
  return claims?.filter((claim) => FREE_CLAIM_TYPES.includes(claim.type))
}

/**
 * Helper function to transform claim data amount to CurrencyAmount
 *
 */
export function parseClaimAmount(value: string, chainId: number | undefined): CurrencyAmount<Token> | undefined {
  const vCow = chainId ? V_COW[chainId || 4] : undefined
  if (!vCow || !value) return undefined
  return CurrencyAmount.fromRawAmount(vCow, value)
}

export type TypeToCurrencyMapper = {
  [key: string]: string
}

/**
 * Helper function to transform claim data type to coin name that can be displayed in the UI
 *
 * @param chainId
 */
export function getTypeToCurrencyMap(chainId: number | undefined): TypeToCurrencyMapper {
  if (!chainId) return {}

  const map: TypeToCurrencyMapper = {
    [ClaimType.GnoOption]: 'GNO',
    [ClaimType.Investor]: 'USDC',
    [ClaimType.UserOption]: '',
  }

  if ([SupportedChainId.MAINNET, SupportedChainId.RINKEBY].includes(chainId)) {
    map[ClaimType.UserOption] = 'ETH'
  }

  if (chainId === SupportedChainId.XDAI) {
    map[ClaimType.UserOption] = 'XDAI'
  }

  return map
}

/**
 * Helper function to get vCow price based on claim type and chainId
 *
 * @param type
 */
export function getTypeToPriceMap(): TypeToPriceMapper {
  return ClaimTypePriceMap
}

/**
 * Helper function to check if current type is free claim
 *
 * @param type
 */
export function isFreeClaim(type: ClaimType): boolean {
  return FREE_CLAIM_TYPES.includes(type)
}

/**
 * Helper function to return an array of indexes from claim data
 *
 * @param type
 */
export function getIndexes(data: RepoClaims | UserClaims): number[] {
  return data.map(({ index }) => index)
}

/**
 * Helper function to get the repo path for the corresponding network id
 * Throws when passed an unknown network id
 */
export function getClaimsRepoPath(id: SupportedChainId): string {
  return `${CLAIMS_REPO}${_repoNetworkIdMapping(id)}/`
}

function _repoNetworkIdMapping(id: SupportedChainId): string {
  switch (id) {
    case SupportedChainId.MAINNET:
      return 'mainnet'
    case SupportedChainId.RINKEBY:
      return 'rinkeby'
    case SupportedChainId.XDAI:
      return 'gnosis-chain'
    default:
      throw new Error('Network not supported')
  }
}

/**
 * Helper function to get the claim key based on account and chainId
 */
export function getClaimKey(account: string, chainId: number): string {
  return `${chainId}:${account}`
}

export type PaidClaimTypeToPriceMap = {
  [type in ClaimType]: { token: Token; amount: string } | undefined
}

/**
 * Helper function to get vCow price based on claim type and chainId
 */
export function claimTypeToTokenAmount(type: ClaimType, chainId: SupportedChainId, prices: VCowPrices) {
  switch (type) {
    case ClaimType.GnoOption:
      return { token: GNO[chainId], amount: prices.gno as string }
    case ClaimType.Investor:
      return { token: USDC_BY_CHAIN[chainId], amount: prices.usdc as string }
    case ClaimType.UserOption:
      return { token: GpEther.onChain(chainId), amount: prices.native as string }
    default:
      return undefined
  }
}