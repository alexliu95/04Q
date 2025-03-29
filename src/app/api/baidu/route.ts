/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-05-14 09:33:19
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-14 16:47:16
 * @Description: 百度-热搜榜
 */
import { NextResponse } from 'next/server';

import { REQUEST_STATUS_TEXT } from '@/utils/enum';
import type { HotListItem } from '@/utils/types';

import { responseError, responseSuccess } from '@/utils';

export async function GET() {
  // 官方 url
  const url = 'https://top.baidu.com/api/board?platform=wise&tab=realtime';
  try {
    // 请求数据
    const response = await fetch(url);
    if (!response.ok) {
      // 如果请求失败，抛出错误，不进行缓存
      throw new Error(`${REQUEST_STATUS_TEXT.ERROR}：百度-热搜榜`);
    }
    // 得到请求体
    const responseBody = await response.json();
    // 处理数据
    if (responseBody.success) {
      const result: HotListItem[] = responseBody.data.cards[0].content.map((v: Record<string, any>, index: number) => {
        return {
          id: index + v.hotScore,
          title: v.word,
          desc: v.desc,
          pic: v.img,
          hot: Number(v.hotScore),
          url: `https://www.baidu.com/s?wd=${encodeURIComponent(v.query)}`,
          mobileUrl: v.url,
        };
      });
      return NextResponse.json(responseSuccess(result));
    }
    return NextResponse.json(responseSuccess());
  } catch (error) {
    return NextResponse.json(responseError);
  }
}

// 数据过期时间
export const revalidate = Number(process.env.NEXT_PUBLIC_CACHE_TIME);
