import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, LineChartIcon as ChartLineUp, Users, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import AudioPlayer from '../components/AudioPlayer';

const styles = {
  bebasNeueRegular: {
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
  },
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = "0x2427e231B401E012edacD1c4dD700ea2D4376eD0";

  const copyToClipboard = async () => {
    const addressToCopy = "0x2427e231B401E012edacD1c4dD700ea2D4376eD0";
    try {
      await navigator.clipboard.writeText(addressToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <main className="min-h-screen bg-[#2A69F7] text-white p-4 pb-8">
      {/* Social Icons */}
      <div className="flex justify-end gap-3 mb-6 px-2">
        <Link href="#" className="hover:opacity-80">
          <span className="block w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                <g transform="scale(8,8)">
                  <rect x="3" y="2" width="8" height="2"></rect>
                  <rect x="21" y="28" width="8" height="2"></rect>
                  <rect x="5" y="4" width="2" height="3"></rect>
                  <rect x="7" y="7" width="2" height="3"></rect>
                  <rect x="11" y="4" width="2" height="3"></rect>
                  <rect x="9" y="10" width="2" height="3"></rect>
                  <rect x="13" y="7" width="2" height="3"></rect>
                  <rect x="11" y="13" width="2" height="3"></rect>
                  <rect x="15" y="10" width="2" height="3"></rect>
                  <rect x="13" y="16" width="2" height="3"></rect>
                  <rect x="17" y="13" width="2" height="3"></rect>
                  <rect x="19" y="10" width="2" height="3"></rect>
                  <rect x="11" y="19" width="2" height="3"></rect>
                  <rect x="9" y="22" width="2" height="3"></rect>
                  <rect x="7" y="25" width="2" height="3"></rect>
                  <rect x="5" y="28" width="2" height="2"></rect>
                  <rect x="21" y="7" width="2" height="3"></rect>
                  <rect x="23" y="4" width="2" height="3"></rect>
                  <rect x="25" y="2" width="2" height="2"></rect>
                  <rect x="15" y="19" width="2" height="3"></rect>
                  <rect x="19" y="16" width="2" height="3"></rect>
                  <rect x="17" y="22" width="2" height="3"></rect>
                  <rect x="21" y="19" width="2" height="3"></rect>
                  <rect x="19" y="25" width="2" height="3"></rect>
                  <rect x="23" y="22" width="2" height="3"></rect>
                  <rect x="25" y="25" width="2" height="3"></rect>
                </g>
              </g>
            </svg>
          </span>
        </Link>
        <Link href="#" className="hover:opacity-80">
          <span className="block w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
              <polygon fill="#589bd4" points="28,10 28,22 26,22 26,24 24,24 24,26 22,26 22,28 10,28 10,26 8,26 8,24 6,24 6,22 4,22 4,10 6,10 6,8 8,8 8,6 10,6 10,4 22,4 22,6 24,6 24,8 26,8 26,10"></polygon>
              <polygon fill="#e6e5e5" points="21,9 21,23 19,23 19,21 15,21 15,19 13,19 13,21 11,21 11,17 8,17 8,15 11,15 11,13 13,13 13,11 17,11 17,9"></polygon>
              <polygon fill="#b6b5b5" points="13,15 13,17 11,17 11,21 13,21 13,19 15,19 15,15"></polygon>
              <rect width="2" height="2" x="15" y="13" fill="#b6b5b5"></rect>
            </svg>
          </span>
        </Link>
        <Link href="#" className="hover:opacity-80">
          <span className="block w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
              <path fill="#f18f06" fillRule="evenodd" d="M8.997,28.997h-2v-2h-2	v-2l-1-1v-9h24v9l-1,1v2h-2v2h-2h-4l-1-1h-8L8.997,28.997z" clipRule="evenodd"></path>
              <path fill="#f18f06" fillRule="evenodd" d="M3.997,19.997v-7h22v9	l1,1v4h-2v2h-2v-2l-1-1l2-2l-1-1h-2v-2h-2l-1-1h-4l-2-2l-1,1h-2v2h-2l-2,2v2h-2v-4L3.997,19.997z" clipRule="evenodd"></path>
              <path fill="#e41e2f" fillRule="evenodd" d="M2.997,14.997v6h2l2-4h2	v-2h10l2,4h2v2h2l2,2v2h2v-6l-1-1v-9h-24v5L2.997,14.997z" clipRule="evenodd"></path>
              <path fill="#e41e2f" fillRule="evenodd" d="M2.997,12.997v2h2l2-2h2	v-2h4l6,2l1,1l1-1h2v2h3l1,4h2v-2l-3-9h-22L2.997,12.997z" clipRule="evenodd"></path>
              <path fill="#085295" fillRule="evenodd" d="M2.997,12.997v-6h2v-2h2	v-2h18v2h2v2h2v10h-2l-2-4h-2v-2l-1-1l-1,1h-2v-2h-10v2h-2l-2,2H2.997z" clipRule="evenodd"></path>
              <path fill="#f18f06" fillRule="evenodd" d="M8.997,28.997v-2l2-2v-2	h6v2l2,2v2H8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.996,4.999v1.999	h14.001V4.999H8.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.997,24.999v1.999	h14.001v-1.999H8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M26.997,8.997h-1.999	v14.001h1.999V8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M6.997,8.999H4.999V23	h1.999V8.999z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.997,6.996H6.999	v2.001h1.999V6.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M24.997,6.997h-1.999	v2.001h1.999V6.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M24.997,22.996h-1.999	v2.001h1.999V22.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.996,22.996H6.997	v2.001h1.999V22.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M22.997,8.997h-1.999	v2.001h1.999V8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M19,10.996h-6.001v2.001	H19V10.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M18.999,18.996h-6.001	v2.001h6.001V18.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M21,18.999v-6.001	h-2.001v6.001H21z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M13,18.997v-6.001	h-2.001v6.001H13z" clipRule="evenodd"></path>
            </svg>
          </span>
        </Link>
        <Link href="#" className="hover:opacity-80">
          <span className="block w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0,0,256,256">
              <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                <g transform="scale(8,8)">
                  <path d="M25,6v-2h-18v2h-3v20h3v2h18v-2h3v-20z" fill="#000000"></path>
                  <rect x="10" y="17" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="12" y="15" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="14" y="21" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="16" y="7" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="14" y="17" width="2" height="2" fill="#c21057"></rect>
                  <rect x="16" y="23" width="2" height="2" fill="#c21057"></rect>
                  <rect x="18" y="9" width="2" height="2" fill="#c21057"></rect>
                  <rect x="20" y="11" width="2" height="2" fill="#c21057"></rect>
                  <rect x="16" y="7" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="12" y="19" width="2" height="4" fill="#c21057"></rect>
                  <rect x="18" y="15" width="2" height="8" fill="#c21057"></rect>
                  <rect x="22" y="13" width="2" height="2" fill="#c21057"></rect>
                  <rect x="12" y="23" width="4" height="2" fill="#e6e5e5"></rect>
                  <rect x="10" y="19" width="2" height="4" fill="#e6e5e5"></rect>
                  <rect x="12" y="17" width="2" height="2" fill="#e6e5e5"></rect>
                  <path d="M20,13v-2h-2v-2h-2v14h2v-8h4v-2z" fill="#e6e5e5"></path>
                </g>
              </g>
            </svg>
          </span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto space-y-6">
        {/* First Card - Main Info */}
        <Card className="bg-white text-black p-0 rounded-3xl overflow-hidden border-4 border-black">
          <div className="w-full bg-black text-white px-8 py-6 flex justify-center items-center">
            <h2 className="text-xl font-semibold text-center" style={{ fontFamily: '"Press Start 2P", monospace' }}>Origin</h2>
          </div>
          <div className="p-8">
            <div className="flex justify-center items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DON%20FULL%20BODY%20v2-gjMkfJkIC6NQrbUp0lAfbhlNp49qdK.gif"
                alt="DON character with purple top hat and headphones"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </Card>

        {/* Contract Address Card */}
        <Card className="bg-white text-black p-4 rounded-3xl overflow-hidden border-4 border-black">
          <div className="flex items-center justify-between">
            <div 
              className="text-sm break-all pr-4 cursor-pointer hover:text-gray-600 transition-colors"
              style={styles.bebasNeueRegular}
              onClick={copyToClipboard}
              role="button"
              aria-label="Click to copy contract address"
            >
              {contractAddress}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-gray-100"
              onClick={copyToClipboard}
            >
              {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">
                {isCopied ? "Address copied" : "Copy contract address"}
              </span>
            </Button>
          </div>
        </Card>

        {/* Second Card - Tokenomics */}
        <Card className="bg-white text-black p-0 rounded-3xl overflow-hidden border-4 border-black">
          <div className="w-full bg-black text-white px-8 py-6 flex justify-center items-center">
            <h2 className="text-xl font-semibold text-center" style={{ fontFamily: '"Press Start 2P", monospace' }}>Tokenomics</h2>
          </div>
          <div className="p-8">
            <p className="text-center text-sm leading-relaxed" style={styles.bebasNeueRegular}>
              The circulating supply is 100,000,000,000 $DON.<br/><br/>
              $DON was fairly launched by clanker, an autonomous bot on farcaster that enables users to launch memecoins with a simple cast mentioning the bot. It starts with only the token supply (no eth), as clanker uses one-sided liquidity on uniswap v3.
            </p>
          </div>
        </Card>

        {/* Third Card - Features */}
        <Card className="bg-white text-black p-0 rounded-3xl overflow-hidden border-4 border-black">
          <div className="w-full bg-black text-white px-8 py-6 flex justify-center items-center">
            <h2 className="text-xl font-semibold text-center" style={{ fontFamily: '"Press Start 2P", monospace' }}>How to Buy</h2>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7736b1d30d303e4-My7HJPXQDrY8XXW9OONacJ6wH8x1o9.gif" 
                alt="Spinning pixel coin" 
                className="w-32 h-32"
              />
            </div>
          </div>
        </Card>


        {/* Gallery Section */}
        <div className="max-w-md mx-auto mt-8 grid grid-cols-3 gap-4">
          <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DON%20WITH%20BALLON-9zJdeiCkDyg0mj9lzyeDscCgGFHATR.png"
              alt="DON with heart balloon pixel art"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 row-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DON%20SPACE%20SUIT%20MOON-DdWSzsNzWmMZSaIgyaHMCNgILOGUaC.png"
              alt="DON in space suit on moon pixel art"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DON%20YELLOW%20NOUNS-gCVZBz1kWDMjwNaabRVtu0UrYrah3E.gif"
              alt="DON in Christmas outfit pixel art"
              fill
              className="object-cover"
            />
          </div>
        </div>
      <AudioPlayer audioSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jay%20Dee%2037%20(Instrumental)-QoxzWgM4DtkvNjpIp60Afh1pw9m8yC.mp3" />
    </main>
  )
}

