import styled from 'styled-components/macro'
import { CheckCircle, Frown } from 'react-feather'
import { Icon } from 'components/CowProtocolLogo'
import { ButtonPrimary, ButtonSecondary } from 'components/Button'
import { transparentize, darken } from 'polished'
import LogoETH from 'assets/cow-swap/network-mainnet-logo.svg'
import LogoGNO from 'assets/cow-swap/gno.png'
import LogoUSDC from 'assets/cow-swap/usdc.png'
import LogoXDAI from 'assets/cow-swap/xdai.png'

export const PageWrapper = styled.div`
  --border-radius: 56px;
  --border-radius-small: 16px;
  display: flex;
  flex-flow: column wrap;
  max-width: 760px;
  width: 100%;
  color: ${({ theme }) => theme.text1};
  border-radius: var(--border-radius);
  padding: 30px;
  border: ${({ theme }) => theme.appBody.border};
  box-shadow: ${({ theme }) => theme.appBody.boxShadow};
  background: ${({ theme }) => theme.bg1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    border-radius: var(--border-radius-small);
  `};

  input[type='checkbox'],
  input[type='radio'] {
    --active: ${({ theme }) => theme.primary1};
    --active-inner: ${({ theme }) => theme.black};
    --focus: 2px rgba(39, 94, 254, .3);
    --border: ${({ theme }) => theme.blueShade3};
    --border-hover: ${({ theme }) => theme.primary1};
    --background: ${({ theme }) => theme.white};
    appearance: none;
    height: 21px;
    width: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));

    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
    }

    &:checked {
      --b: var(--active);
      --bc: var(--active);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: .5;

      &:checked {
      }

      & + label {
        cursor: not-allowed;
      }
    }

    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }

    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }

    &:after {
      opacity: var(--o, 0);
    }

    &:checked {
      --o: 1;
    }

    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }

  input[type='checkbox'] {
    border-radius: 7px;

    &:after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }

    &:checked {
      --r: 43deg;
    }
  }

  input[type='radio'] {
    border-radius: 50%;

    &:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(var(--s, .7));
    }
  }
}

a {
  color: ${({ theme }) => theme.primary4};
}

p {
  font-size: 16px;
  display: block;
  line-height: 1.6;
  font-weight: 300;
  margin: 0 0 24px;
  text-align: center;
}

p > i {
  color: ${({ theme }) => theme.primary1};
}

p > a {
  display: inline;
}

${ButtonPrimary} {
  border-radius: var(--border-radius);
  width: 100%;
  font-size: 21px;
  padding: 24px 16px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
      margin: 0 auto 24px;
    `};

  &[disabled] {
    cursor: not-allowed;
    pointer-events: all;
  }
}

${ButtonSecondary} {
  background: 0;
  color: ${({ theme }) => theme.primary4};
  border: none;

  &:hover {
    border: 0;
    box-shadow: none;
    transform: none;
    background: 0;
    color: ${({ theme }) => theme.primary4};
    text-decoration: underline;
  }
}
`

export const TokenLogo = styled.div<{ symbol: string; size: number }>`
  display: flex;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => `${size}px`};
  background: ${({ symbol, theme }) => `url(${_getLogo(symbol) || theme.blueShade3}) no-repeat center/contain`};
`

function _getLogo(symbol: string) {
  switch (symbol.toUpperCase()) {
    case 'GNO':
      return LogoGNO
    case 'USDC':
      return LogoUSDC
    case 'ETH':
      return LogoETH
    case 'XDAI':
      return LogoXDAI
    default:
      return undefined
  }
}

export const ClaimSummary = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  background: ${({ theme }) => (theme.currencyInput?.background ? theme.currencyInput?.background : theme.bg1)};
  border: ${({ theme }) =>
    theme.currencyInput?.border ? theme.currencyInput?.border : `border: 1px solid ${theme.bg2}`};
  border-radius: var(--border-radius);
  margin: 0 auto 24px;
  position: relative;
  overflow: hidden;

  h1,
  div {
    z-index: 1;
  }

  p {
    margin: 0;
    display: block;
  }

  > div {
    margin: 0 0 0 18px;
  }
`

export const ClaimSummaryTitle = styled.h1`
  font-size: 1.6rem;
  margin-left: 15px;
`

export const IntroDescription = styled.div<{ center?: boolean }>`
  display: block;
  width: 100%;
  margin: 0 0 24px;
  line-height: 1.6;

  text-align: ${({ center }) => (center ? 'center' : 'initial')};

  > p {
    margin: 8px auto 24px;
  }

  > p > i {
    color: ${({ theme }) => theme.text1};
    font-weight: 600;
    font-style: normal;
  }

  > button {
    width: auto;
    display: inline;
  }
`

export const ClaimTable = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin: 0 0 24px;

  ${TokenLogo},
  ${Icon} {
    border: 2px solid ${({ theme }) => theme.blueShade3};
  }

  ${TokenLogo} {
    margin: 0 -16px 0 0;
  }

  table {
    display: grid;
    border-collapse: collapse;
    min-width: 100%;
    font-size: 16px;
    grid-template-columns: min-content auto auto 240px;
  }

  thead,
  tbody,
  tr {
    display: contents;
  }

  tr > td {
    background: ${({ theme }) => theme.blueShade3};
  }

  th,
  td {
    padding: 15px;
  }

  th {
    &:first-child {
      display: flex;
      align-items: center;
    }

    background: transparent;
    text-align: left;
    font-weight: normal;
    font-size: 15px;
    color: ${({ theme }) => theme.text1};
    position: relative;
  }

  th:last-child {
    border: 0;
  }

  td {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text1};
    word-break: break-word;
    background: ${({ theme }) => theme.blueShade3};
  }

  td > b {
    font-weight: 300;
  }

  tr > td {
    margin: 0 0 12px;
  }

  tr > td:nth-of-type(2) {
    > span {
      margin: 0 12px 0 0;
      display: flex;
      flex-flow: column wrap;
    }

    > span > i {
      font-style: normal;
      font-size: 15px;
    }
  }

  /* 3rd row - amount */

  tr > td:nth-of-type(3) {
    font-size: 18px;
    font-weight: 500;
  }

  tr > td:nth-of-type(4) {
    font-size: 13px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    gap: 4px;

    > span {
      color: ${({ theme }) => transparentize(0.1, theme.text1)};
      font-weight: 300;
    }

    > span > b {
      font-weight: 500;
      color: ${({ theme }) => theme.text1};
    }
  }

  tr > td:first-of-type {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  tr > td:last-of-type {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`

export const ClaimRow = styled.tr<{ isPending?: boolean }>`
  > td {
    background-color: ${({ theme, isPending }) => (isPending ? '#221954' : theme.bg5)};
    cursor: ${({ isPending }) => (isPending ? 'pointer' : 'initial')};

    &:first-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`

export const ClaimAccount = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  > b {
    font-size: 13px;
    margin: 0 0 6px;
    font-weight: normal;
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  > div > img {
    height: 46px;
    width: 46px;
    border-radius: 46px;
    object-fit: contain;
    background-color: grey;
  }

  > div > p {
    margin: 0 0 0 10px;
    font-size: 18px;
    font-weight: normal;
  }
`

export const ClaimTotal = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  > b {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 2px;
    opacity: 0.7;
  }

  > p {
    margin: 0;
    font-size: 30px;
    font-weight: bold;
  }
`

export const ConfirmOrLoadingWrapper = styled.div<{ activeBG: boolean }>`
  width: 100%;
  padding: 24px;
  color: ${({ theme }) => theme.text1};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  font-weight: 300;

  h3 {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    margin: 0 0 12px;
    color: ${({ theme }) => theme.text1};
  }
`

export const AttemptFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 24px 0 0;

  > p {
    font-size: 14px;
    opacity: 0.7;
    margin: 0;
  }
`

export const ConfirmedIcon = styled.div`
  padding: 60px 0;
`

export const CheckIcon = styled(CheckCircle)`
  height: 16px;
  width: 16px;
  margin-right: 6px;
  stroke: ${({ theme }) => theme.primary1};
`

export const NegativeIcon = styled(Frown)`
  height: 16px;
  width: 16px;
  margin-right: 6px;
  stroke: ${({ theme }) => theme.primary1};
`

export const EligibleBanner = styled.div`
  width: 100%;
  border-radius: var(--border-radius);
  padding: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => transparentize(0.9, theme.attention)};
  color: ${({ theme }) => theme.attention};
  margin: 0 auto 16px;
  font-weight: 600;

  > img {
    margin: 0 6px 0 0;
    width: 21px;
    height: 21px;
  }
`

export const InputField = styled.div`
  padding: 18px 18px 18px 36px;
  border-radius: var(--border-radius);
  border: ${({ theme }) => theme.currencyInput?.border};
  color: ${({ theme }) => theme.text1};
  display: flex;
  flex-flow: row wrap;
  background: ${({ theme }) => theme.currencyInput?.background};
  width: 100%;
  margin: 0 0 24px;

  > input {
    background: transparent;
    border: 0;
    font-size: 24px;
    outline: 0;
    color: ${({ theme }) => theme.text1};
    width: 100%;
  }

  > input::placeholder {
    color: inherit;
    opacity: 0.7;
  }

  > b {
    display: flex;
    margin: 0 0 12px;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.bg5};
    color: ${({ theme }) => theme.white};
    border-radius: 16px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.075);
    outline: none;
    cursor: pointer;
    user-select: none;
    border: none;
    height: 2.4rem;
    width: auto;
    flex: 0 1 auto;
    padding: 0 8px;
    justify-content: space-between;

    &:focus,
    &:hover {
      background-color: ${({ theme }) => darken(0.05, theme.bg5)};
    }
  }

  > div {
    display: flex;
    width: 100%;
  }

  > div > p {
    display: flex;
    align-items: center;
    margin: 0 0 0 6px;
    padding: 0;
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  > span {
    display: flex;
    flex: 1 1 100%;
  }

  > span > ${ButtonSecondary} {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const InputError = styled.div`
  color: red;
`

export const InputErrorText = styled.div`
  margin: 0 0 24px;
`

export const InputFieldTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 12px;
  font-weight: normal;
  color: inherit;

  > b {
    margin-right: 10px;
  }
`

export const CheckAddress = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;

  ${Icon} {
    margin: 0 auto;
  }

  > h1 {
    font-size: 32px;
    font-weight: 300;
    text-align: center;
  }

  > h1 > b {
    font-weight: bold;
  }

  > p {
    text-align: center;
    font-size: 18px;
    line-height: 1.2;
    margin: 0 0 24px;
  }
`

export const ClaimBreakdown = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;

  > p {
    font-size: 16px;
    line-height: 1.6;
    font-weight: 300;
    margin: 0 0 24px;
    text-align: center;
  }
`

export const FooterNavButtons = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;

  ${ButtonSecondary} {
    margin: 24px auto 0;
    color: var(--colorgrey);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primary1};
      text-decoration: underline;
    }

    > svg {
      margin: 0 6px 0 0;
    }
  }
`

export const TopNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0;
  margin: 0 auto 24px;

  ${ButtonSecondary} {
    margin: 0;
    color: ${({ theme }) => theme.text1};
    font-size: 15px;
    width: auto;
  }
`

export const InvestFlow = styled.div`
  display: flex;
  flex-flow: column wrap;

  h1 {
    font-size: 28px;
    font-weight: 500;
    text-align: center;
  }
`

export const InvestContent = styled.div`
  display: flex;
  flex-flow: column wrap;

  ${ClaimTable} {
    table {
      display: grid;
      border-collapse: collapse;
      min-width: 100%;
      font-size: 14px;
      grid-template-columns: repeat(3, auto);

      tr > td {
        flex-flow: column wrap;
        align-content: center;
        gap: 18px;
        font-weight: 300;
        font-size: 14px;
      }

      tr > td > span {
        font-size: inherit;
        display: flex;
        flex-flow: column wrap;

        > i {
          font-style: normal;
        }

        &:last-child {
          width: 100%;
        }
      }

      tr > td:nth-of-type(1) {
        flex-flow: row wrap;
        align-content: center;
        gap: 6px;

        > span > b,
        > b {
          font-size: 16px;
          font-weight: bold;
        }

        > span > i {
          font-size: 15px;
        }
      }

      tr > td:nth-of-type(2) {
        flex-flow: column wrap;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: center;

        > span {
          margin: 0;
        }

        > i {
          font-style: normal;
          font-size: 18px;
          font-weight: 500;
        }
      }

      tr > td:nth-of-type(3) {
        font-weight: 300;
        font-size: 14px;
        justify-content: flex-start;

        > span {
          width: 100%;
        }
      }
    }
  }
`

export const InvestSummaryTable = styled.table`
  ${TokenLogo} {
    margin: 0 -28px 0 0;
  }

  ${TokenLogo},
  ${Icon} {
    border: 2px solid ${({ theme }) => theme.blueShade3};
  }
`

export const InvestTokenGroup = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 24px;
  margin: 0 0 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.blueShade3};

  ${TokenLogo},
  ${Icon} {
    border: 4px solid ${({ theme }) => theme.blueShade3};
  }

  > div {
    display: flex;
    flex-flow: column wrap;
    flex: 0 1 auto;
    padding: 0 32px 0 0;
  }

  > div > span {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 25px 0 0;
  }

  > div > h3 {
    font-size: 21px;
    font-weight: 600;
    margin: 0 0 18px;
  }

  ${TokenLogo} {
    margin: 0 -36px 0 0;
  }

  > span {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 18px;
  }
`

export const InvestInput = styled.span`
  display: flex;
  flex-flow: column wrap;
  font-size: 15px;
  width: 100%;

  > div {
    display: flex;
    flex-flow: column wrap;
    gap: 8px;
    width: 100%;
  }

  > div > label {
    display: flex;
    flex-flow: row wrap;
    padding: 12px;
    position: relative;
    background: ${({ theme }) => (theme.currencyInput?.background ? theme.currencyInput?.background : theme.bg1)};
    border: ${({ theme }) =>
      theme.currencyInput?.border ? theme.currencyInput?.border : `border: 1px solid ${theme.bg2}`};
    border-radius: 12px;

    > span {
      margin-left: 5px;
    }

    &:hover {
      border: ${({ theme }) =>
        theme.currencyInput?.border ? theme.currencyInput?.border : `border: 1px solid ${theme.bg2}`};
    }
  }

  > div > label > b {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    position: absolute;
    right: 12px;
    top: 28px;
    bottom: 0;
    margin: auto;
    font-weight: normal;
    color: ${({ theme }) => theme.text1};
    background: ${({ theme }) => theme.bg5};
    border-radius: 12px;
    padding: 0 12px;
    height: 32px;
  }

  > div > label > input {
    color: ${({ theme }) => theme.text1};
    border: none;
    padding: 12px 70px 0 0;
    font-size: 26px;
    outline: 0;
    background: transparent;
    width: 100%;
    line-height: 1;
    text-align: left;

    &::placeholder {
      opacity: 0.5;
      line-height: 1;
    }
  }

  > div > small {
    color: red;
    margin: 12px 0;
    font-size: 15px;
  }

  > div > i {
    font-style: normal;
  }

  > div > label > span {
    display: flex;
    width: 100%;
    font-size: 14px;
  }

  > div > label > span > b {
    margin: 0 3px 0 0;
    font-weight: normal;
  }

  > div > Label > span > i {
    font-style: normal;
  }

  > div > label > span > button {
    background: none;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.primary4};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.text1};
    }
  }
`

export const InvestAvailableBar = styled.div<{ percentage?: number }>`
  width: 100%;
  display: flex;
  position: relative;
  height: 17px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  border-radius: 24px;
  background: ${({ theme }) => theme.bg1};
  margin: 6px 0;
  padding: 0;

  &::before {
    content: '';
    display: block;
    background: ${({ theme }) =>
      `linear-gradient(to right, ${transparentize(0.2, theme.primary5)}, ${theme.primary4})`};
    height: 100%;
    border-radius: 24px 0 0 24px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    transition: width 0.3s ease-in-out;
    width: ${({ percentage }) => (percentage ? `${percentage}%` : '0%')};
  }

  &::after {
    content: ${({ percentage }) => (percentage ? `'${percentage}%'` : '0%')};
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.text1};
    z-index: 1;
    height: 100%;
    width: ${({ percentage }) => (percentage ? `${percentage}%` : '0%')};
    transition: width 0.3s ease-in-out;
    margin: 0;
    padding: 1px 4px 0 4px;
    min-width: max-content;
    text-align: right;
  }
`

export const InvestSummary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 15px;
  gap: 16px 36px;

  > span {
    display: flex;
    flex-flow: column wrap;
    margin: 0 0 18px;
    color: ${({ theme }) => transparentize(0.1, theme.text1)};
    gap: 4px;
  }

  > span > ${ButtonPrimary} {
    margin: 3px 0 12px -9px;
    padding: 6px;
    font-size: 16px;
  }

  > span > i {
    font-style: normal;
  }

  > span > i > div > img {
    margin: 0 0 0 4px;
    height: 21px;
    width: 21px;
  }

  > span > b {
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }
`

export const InvestFlowValidation = styled.div`
  width: 100%;
  border-radius: var(--border-radius);
  padding: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255 0 0 / 25%);
  color: red;
  margin: 0 auto 16px;
`

export const ClaimAccountButtons = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccountClaimSummary = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  margin: 24px 0;

  > span {
    display: flex;
    flex-flow: column wrap;
    white-space: pre-wrap;
    gap: 3px;
  }

  > span > i {
    font-style: normal;
    word-break: break-all;
  }
`

export const CowSpinner = styled.div`
  --circle-size: 120px;
  --border-radius: 100%;
  --border-size: 2px;
  border-radius: var(--circle-size);
  height: var(--circle-size);
  width: var(--circle-size);
  margin: 0 auto 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: var(--border-size);
    right: var(--border-size);
    bottom: var(--border-size);
    left: var(--border-size);
    z-index: 0;
    border-radius: calc(var(--border-radius) - var(--border-size));
    box-shadow: inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 10px 40px -20px #000000;
  }

  &::before {
    content: '';
    ${({ theme }) => theme.iconGradientBorder};
    display: block;
    width: var(--circle-size);
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 100%;
    z-index: 0;
    animation: spin 1.5s linear infinite;
  }

  > span {
    height: 94%;
    width: 94%;
    padding: 0;
    stroke: ${({ theme }) => theme.text1};
    border-radius: var(--circle-size);
    z-index: 1;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`