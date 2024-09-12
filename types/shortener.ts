export type ShortenerReq = {
  destination: string;
};

export type ShortenerRes = {
  id: string;
  title: string;
  slashtag: string;
  destination: string;
  createdAt: string;
  updatedAt: string;
  expiredAt: null | string;
  status: string;
  tags: Array<any>;
  linkType: string;
  clicks: number;
  isPublic: boolean;
  shortUrl: string;
  domainId: string;
  domainName: string;
  domain: {
    id: string;
    ref: string;
    fullName: string;
    sharing: {
      protocol: {
        allowed: Array<string>;
        default: string;
      };
    };
    active: boolean;
  };
  https: boolean;
  favourite: boolean;
  creator: {
    id: string;
    fullName: string;
    avatarUrl: string;
  };
  integrated: boolean;
};
