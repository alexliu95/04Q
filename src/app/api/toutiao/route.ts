/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-05-14 09:19:59
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-14 16:55:47
 * @Description: 今日头条-热榜
 */
import { NextResponse } from 'next/server';

import { REQUEST_STATUS_TEXT } from '@/utils/enum';
import type { HotListItem } from '@/utils/types';

import { responseError, responseSuccess } from '@/utils';

export async function GET() {
  // 官方 url
  const url = 'https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc';
  try {
    // 请求数据
    const response = await fetch(url);
    if (!response.ok) {
      // 如果请求失败，抛出错误，不进行缓存
      throw new Error(`${REQUEST_STATUS_TEXT.ERROR}：今日头条-热榜`);
    }
    // 得到请求体
    const responseBody = await response.json();
    // 处理数据
    if (responseBody.status === 'success') {
      const result: HotListItem[] = responseBody.data.map((v: Record<string, any>) => {
        return {
          id: v.ClusterId,
          title: v.Title,
          pic: v.Image.url,
          hot: v.HotValue,
          url: `https://www.toutiao.com/trending/${v.ClusterIdStr}/`,
          mobileUrl: `https://api.toutiaoapi.com/feoffline/amos_land/new/html/main/index.html?topic_id=${v.ClusterIdStr}`,
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
