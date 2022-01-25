import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
`;

const contentHeading = css`
  margin-bottom: 1em;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(18px, 1.770833vw, 34px);
  font-family: ${({ theme }) => theme.getFont('heading')};
`;

export const Content = styled.article`
  ${({ theme }) => theme.getSectionBorder()};
  padding: 5% 6.8%;
  font-size: clamp(12px, 1.25vw, 24px);
  line-height: 1.375;

  h2 {
    ${contentHeading};
  }

  p + h2,
  p + p {
    margin-top: 1em;
  }

  ul {
    margin: 1em 0;
    padding-left: 2em;
    list-style-position: inside;
  }
`;

export const FootnotesWrapper = styled.footer`
  padding: 5% 6.8%;

  ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
    list-style-position: inside;
    font-size: clamp(10px, 1.145833vw, 22px);

    > li {
      padding: 0.2em 0;
      &.variant--link {
        overflow: hidden;
        max-width: 50%;
        text-overflow: ellipsis;
        white-space: pre;
      }
    }

    a {
      ${({ theme }) => theme.getLinkStyles(theme.getColor('main'))};
    }
  }
`;

export const FootnoteHeading = styled.h3`
  margin-bottom: 1em;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(14px, 1.458333vw, 28px);
  font-family: ${({ theme }) => theme.getFont('heading')};
`;
