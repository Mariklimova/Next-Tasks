'use client'

import Link from "next/link";

export default function Task2() {

    return <>
        <p>5. Создайте массив данных, представляющий элементы, которые вы хотите
            отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"].
            Добавить событие клика с распознаванием на какой именно li был совершен клик</p>

        <ul>
            {["New York", "London", "Tokyo", "Paris", "Berlin"].map((el,i)=>
            <li onClick={(e)=>console.log(e.target.textContent)} key={i}>{el}</li>)}
        </ul>

        <p><Link href='/'>home</Link></p>

    </>
}