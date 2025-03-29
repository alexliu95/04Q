'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards";

export default function Home() {
	const [sites, setSites] = useState([]);
	const currentYear = new Date().getFullYear();

	async function retrieveData() {
        const response = await fetch('/api/getSites', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json()
        return result;
    }

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const data = await retrieveData();
                setSites(data);
            } catch (error) {
                console.log('error: ', error);
            }
        }
        fetchData();
    },[]);

	return (
		<div className="grid grid-cols-12">
			<div className="col-span-2 w-full text-white h-screen relative">
				<div className="text-center cursor-pointer select-none fixed p-2 w-2/12 h-full bg-gray-950">
					{/* <div className=" py-2 bg-gray-900 hover:bg-gray-800 rounded my-1">热搜头条</div> */}
					{sites.length > 0 && sites.map((site, i) => (
						<a href={`#${site.cate}`} key={i}><div className="py-2 bg-gray-900 hover:bg-gray-800 rounded my-1">{site.cate}</div></a>
					))}
				</div>
			</div>
			<div className="col-span-10 p-4">
				{/* <NewsCards /> */}
				{sites.length > 0 && sites.map((site, i) => (
					<div key={i}>
						<div id={site.cate} className="py-2">{site.cate}</div>
						<div className="grid grid-cols-6 gap-2">
							{site.sites.map((item, i) => (
								<div className="rounded-xl bg-gray-50 p-4 cursor-pointer hover:bg-gray-100" key={i}>
									<div className="flex gap-1 items-start">
										<div><Image src={item.icon} alt={item.name} width="25" height="25" /></div>
										<div>
											<div className="font-semibold hover:text-">{item.name}</div>
											<div className="text-sm text-gray-600">{item.desc}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
				<div className="mt-4 text-gray-500 text-sm">
					<div className="text-center">
						<div>04Q.com是Onpage.ca的导航服务站点。为用户提供开源可复制的导航方案</div>
						<div className="flex justify-center gap-4 mb-2">
							<div className="">友情链接</div>
							<div><a href="https://onpage.ca">Onpage.ca</a></div>
							<div><a href="https://onpage.ca">Onpage.ca</a></div>
							<div><a href="https://onpage.ca">Onpage.ca</a></div>
							<div><a href="https://onpage.ca">Onpage.ca</a></div>
							<div><a href="https://onpage.ca">Onpage.ca</a></div>
						</div>
						<div>All Rights Reserved By Onpage Inc {currentYear}</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}
