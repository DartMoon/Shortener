import { ENDPOINTS } from '@/api/endpoints';
import { httpClient } from '@/api/http-client';
import { ShortenerRes, ShortenerPayload } from '@/types/shortener';

export const API = {
  createShortLink: (data: ShortenerPayload) =>
    httpClient.POST<ShortenerRes>(ENDPOINTS.SHORTEN.CREATE_LINK, data),
};
