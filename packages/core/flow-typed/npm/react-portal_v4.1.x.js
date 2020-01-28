// flow-typed signature: f1544d0de464a4678f8d32a152c45624
// flow-typed version: c6154227d1/react-portal_v4.1.x/flow_>=v0.104.x

declare module 'react-portal' {
  declare type PortalProps = {
    children: React$Node,
    node?: Element | null,
    ...
  };

  declare class Portal extends React$Component<PortalProps> {}

  declare type RenderFunctionParams = {
    openPortal: (event?: SyntheticEvent<>) => void,
    closePortal: () => void,
    portal: (children: React$Node) => React$Element<typeof Portal>,
    isOpen: boolean,
    ...
  };

  declare type PortalWithStateProps = {
    children: (params: RenderFunctionParams) => React$Node,
    node?: Element | null,
    defaultOpen?: boolean,
    closeOnEsc?: boolean,
    closeOnOutsideClick?: boolean,
    onOpen?: () => void,
    onClose?: () => void,
    ...
  };

  declare class PortalWithState extends React$Component<PortalWithStateProps> {}

  declare module.exports: {
    Portal: typeof Portal,
    PortalWithState: typeof PortalWithState,
    ...
  };
}
