export type ShortenerPayload = {
  long_url: string;
};

export type ShortenerRes = {
  short_url: string;
  description: null | string;
  long_url: string;
  domain: string;
  short_id: string;
  expire_at_views: null | string;
  expire_at_datetime: null | string;
  public_stats: boolean;
  created_at: string;
  updated_at: string;
  meta: {
    smart_urls: Array<{
      type: string;
      url: string;
    }>;
  };
};
