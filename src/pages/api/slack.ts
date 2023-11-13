import type { NextApiRequest, NextApiResponse } from 'next';
import { WebClient, ErrorCode } from '@slack/web-api';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const token = process.env.SLACK_TOKEN;
  const channelId = process.env.SLACK_CHANNEL_ID ?? '';
  const webSlackApi = new WebClient(token);

  if (req.method !== 'POST') {
    res.status(405).send({ name: 'Only POST requests allowed' });
  }

  if (!token) {
    console.warn('Token must not be undefined');
    res.writeHead(405).end('ChannelId must not be undefined');
  }

  if (!channelId) {
    console.warn('ChannelId must not be undefined');
    res.writeHead(405).end('ChannelId must not be undefined');
  }

  await webSlackApi.chat
    .postMessage({
      text: req.body,
      channel: channelId,
    })
    .then((res) => {
      console.log(
        `Successfully send message ${res.ts} in conversation ${channelId}`,
      );
    })
    .catch((err) => {
      if (err.code === ErrorCode.PlatformError) {
        console.log(err.data);
        return;
      } else if (err.code === ErrorCode.RequestError) {
        console.log(err.data);
        return;
      }
      console.log(err);
    });
}
