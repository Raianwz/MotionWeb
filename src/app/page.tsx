"use client" 
import Image from 'next/image'
import pattern from '../assets/pattern.png'
import logoR from '../assets/logo_r.png'
import InputBox from '../components/InputBox'
import qrcode from '../assets/qrcode.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center flex-col"
      style={{ backgroundImage: `url("${pattern.src}")`, backgroundColor: '#9400d3' }}>
      <div className="container mx-auto p-4 w-8/12 h-4/5 rounded-lg min-w-min min-h-min" style={{ backgroundColor: 'white' }}>
        <div className="flex items-center justify-center mt-3 mb-5">
          <Image src={logoR.src} alt='Logo Motion' width={300} height={300} />
        </div>
        <form className="my-16 mx-15 flex flex-row justify-center items-center">
          <div className='space-y-8 flex flex-col'>
            <p>Boas Vindas!</p>
            <InputBox type='text' name='txtLogin' id='txtLogin' placeholder='Digite seu E-mail ou Usuário' required={true} />
            <InputBox type='password' name='txtPassword' id='txtPassword' placeholder='Digite sua senha' required={true} />
            <div className="inline-flex items-center">
              <p className="mr-7 text-xs font-bold cursor-pointer hover:text-blue-500" style={{ position: 'relative', top: '-35px' }}>
                Esqueceu a senha?</p>
              <input type='submit' id='btnLogin' className='rounded text-black px-3 bg-blue-200 hover:bg-blue-300 cursor-pointer'
                style={{ border: 'none', width: '160px', height: '45px' }} value='Login' />
            </div>
              <p className="p4 text-xs font-bold cursor-pointer hover:text-blue-500" onClick={(e)=> {e.preventDefault(); router.push('/cadastro')}}>
                Ainda não tem uma conta? Registre-se</p>
          </div>
          <div className='space-y-8 pl-16 flex flex-col'>
            <Image src={qrcode.src} alt='Código QR' width={220} height={100} />
          </div>
        </form>
      </div>
      <p className="p-4 sky-50">Motion ©️ 2023</p>
      <style>{`
        @media (max-width: 900px) {
          .pl-16 {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
