
import axios from 'axios';
import Link from "next/link";


export default async function Task9() {

    const getIp = async () =>  (await axios.get('https://api.ipify.org/?format=json')).data.ip;
    const result = await getIp();

   
    return <>
        <p>9. Создайте компонент, который выполняет запрос к API
            https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
            (решить задачу через серверный компонент)
        </p>

            <p>{result}</p>

        <p><Link href='/'>home</Link></p>

    </>
}