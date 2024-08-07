import Link from 'next/link'
import style from './style.module.css'

export default function Task1() {
    return<>
    <p>1. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.</p>

    <div className={style.form}>
        <input type="text" placeholder="введите имя"/>
        <input type="text" placeholder="введите фамилию"/>
        <input type="text" placeholder="введите адрес электронной почты"/>
        <input type="text" placeholder="введите пороль"/>
    </div>

    <p><Link href='/'>home</Link></p>
    </>
}