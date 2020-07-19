import { css, FlattenSimpleInterpolation } from 'styled-components';

import { RESOLUTIONS } from 'visual/constants';

export function mobile(content: FlattenSimpleInterpolation) {
  return css`
    @media (max-width: ${RESOLUTIONS.mobile.max}) {
      ${content}
    }
  `;
}

export function mobileTablet(content: FlattenSimpleInterpolation) {
  return css`
    @media (max-width: ${RESOLUTIONS.tablet.max}) {
      ${content}
    }
  `;
}

export function tablet(content: FlattenSimpleInterpolation) {
  return css`
    @media (min-width: ${RESOLUTIONS.tablet.min}) and (max-width: ${RESOLUTIONS
        .tablet.max}) {
      ${content}
    }
  `;
}

export function tabletDesktop(content: FlattenSimpleInterpolation) {
  return css`
    @media (min-width: ${RESOLUTIONS.tablet.min}) {
      ${content}
    }
  `;
}

export function desktop(content: FlattenSimpleInterpolation) {
  return css`
    @media (min-width: ${RESOLUTIONS.desktop.min}) {
      ${content}
    }
  `;
}
