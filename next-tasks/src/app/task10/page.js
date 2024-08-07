'use client'

import Link from "next/link";
import { useMemo, useState } from "react";

export default function Task2() {

    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const factorial = (n) => n != 0 && n != 1 ? n * factorial(n - 1) : 1;

    useMemo(() => {
        setResult(factorial(number))
    }, [number])

    return <>
        <p>10. Создайте компонент, в котором пользователь может ввести число. Используйте
            useMemo, чтобы вычислить факториал введенного числа. Выведите результат
            факториала на странице.</p>


        <div>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />

            <p>{result}</p>
        </div>

        <p><Link href='/'>home</Link></p>

    </>
}