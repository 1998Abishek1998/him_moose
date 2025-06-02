import { ContentfulClientApi, createClient } from "contentful";
import { env } from "../config/env";

class ContentfulService {
  static instance: ContentfulService;
  private static client: ContentfulClientApi<any>;

  constructor() {
    if (ContentfulService.instance) {
      return ContentfulService.instance;
    }

    ContentfulService.client = createClient({
      space: env.CONTENTFUL_SPACE,
      accessToken: env.CONTENTFUL_ACCESS_TOKEN,
    });
    ContentfulService.instance = this;
  }

  async getImage(assetId: string) {
    try {
        const asset  = await  ContentfulService.client.getAsset(assetId);
        if(asset.fields.file) {
            return asset.fields.file
        }
    } catch (error) {
        console.log(error)
    }
  }
}
