import { useState } from "react";

export default function NewsCards() {
    const [weiboData, setWeiboData] = useState();

    async function retrieveData(key) {
        const response = await fetch('/api/' + key, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json()
        return result;
    }

    return (
        <div className="grid grid-cols-4">
            <div>
                <div>微博</div>
                <div></div>
            </div>
            <div>aaa</div>
            <div>ccc</div>
            <div>xxx</div>
        </div>
    )
}