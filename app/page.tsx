"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, LineChartIcon as ChartLineUp, Users, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

const styles = {
  bebasNeueRegular: {
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
  },
};

// Define custom theme
const darkTheme = {
  primary: '#000000',
  secondary: '#666666',
  interactive: '#333333',
  container: '#222222',
  module: '#111111',
  accent: '#FFFFFF',
  outline: '#333333',
  dialog: '#000000',
  fontFamily: 'Inter',
  borderRadius: {
    large: 0.8,
    medium: 0.8,
    small: 0.8,
    xsmall: 0.8
  }
}

// Define token list
const MY_TOKEN_LIST = [
  {
    name: "Don Da Degen Dog",
    address: "0x2427e231B401E012edacD1c4dD700ea2D4376eD0",
    symbol: "DON",
    decimals: 18,
    chainId: 8453,
    logoURI: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DON%20FULL%20BODY%20v2-gjMkfJkIC6NQrbUp0lAfbhlNp49qdK.gif"
  }
]

// Add scroll function
const scrollToSwap = () => {
  const element = document.getElementById('swap-section');
  element?.scrollIntoView({ behavior: 'smooth' });
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
    <main className="min-h-screen text-white p-4 pb-8" 
          style={{ 
            backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moblieview2-z06BPRebXG0ei4GazVfAoQthwFYyTC.png")', 
            margin: '0 auto', 
            backgroundColor: '#2A69F7',
            backgroundSize: '109% auto',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
      {/* Social Icons */}
      <div className="flex justify-end gap-3 mb-6 px-2">
        <Link href="#" className="hover:opacity-80">
          <span className="block w-7 h-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                <g transform="scale(6,6)">
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
      <div className="max-w-[324px] mx-auto space-y-6 mt-8">
        {/* Hero Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 font-press-start">DON DA DEGEN DOG</h1>
          <p className="text-xl" style={styles.bebasNeueRegular}>Coolest Degenerate Pixel Dog on Base</p>
        </div>

        {/* Contract Address Card */}
        <Card className="bg-white text-black p-4 rounded-3xl overflow-hidden border-4 border-black shadow-[4px_4px_8px_0px_rgba(0,0,0,0.3)]">
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

        {/* Buy Button */}
        <Button 
          className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-lg border-4 border-black font-press-start w-full hover:animate-[wiggle_1.5s_ease-in-out]"
          style={{ fontSize: '14px' }}
          onClick={scrollToSwap}
        >
          Buy $DON
        </Button>

        {/* First Card - Main Info - Origin */}
        <Card className="bg-white text-black p-0 rounded-3xl overflow-hidden border-4 border-black shadow-[4px_4px_8px_0px_rgba(0,0,0,0.3)]">
          <div className="w-full bg-black text-white px-8 py-6 flex justify-center items-center">
            <h2 className="text-xl font-semibold text-center font-press-start" style={{ fontSize: '16px' }}>Origin</h2>
          </div>
          <div className="p-8 flex flex-col items-center space-y-6">
            <div className="flex justify-center items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DON%20FULL%20BODY%20v2-gjMkfJkIC6NQrbUp0lAfbhlNp49qdK.gif"
                alt="DON character with purple top hat and headphones"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm leading-relaxed" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              $DON is a Art meme coin created for the true art lovers and degens on Base.<br/>
              This coin was created because I wanted to give this pixel dog an identity and home on-chain instead of remaining in my archives.
            </p>
          </div>
        </Card>

        {/* Second Card - Tokenomics */}
        <Card className="bg-white text-black p-0 rounded-3xl overflow-hidden border-4 border-black shadow-[4px_4px_8px_0px_rgba(0,0,0,0.3)]">
          <div className="w-full bg-black text-white px-8 py-6 flex justify-center items-center">
            <h2 className="text-xl font-semibold text-center font-press-start" style={{ fontSize: '16px' }}>Tokenomics</h2>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/loading-clanker.gif"
                alt="Clanker bot animation"
                className="w-32 h-32"
              />
            </div> 
            <p className="text-center text-sm leading-relaxed" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              The circulating supply is 100,000,000,000 $DON.<br/>
              $DON was fairly launched by clanker, an autonomous bot on farcaster that enables users to launch memecoins with a simple cast mentioning the bot. It starts with only the token supply (no eth), as clanker uses one-sided liquidity on uniswap v3.
            </p>
          </div>
        </Card>

        {/* Third Card - Features */}
        <Card className="bg-white text-black p-0 rounded-3xl overflow-hidden border-4 border-black shadow-[4px_4px_8px_0px_rgba(0,0,0,0.3)]" id="swap-section">
          <div className="w-full bg-black text-white px-8 py-6 flex justify-center items-center">
            <h2 className="text-xl font-semibold text-center font-press-start" style={{ fontSize: '16px' }}>Swap Token</h2>
          </div>
          <div className="p-8">
            {/* Uniswap Widget */}
            <div className="Uniswap flex justify-center items-center">
              <SwapWidget
                tokenList={MY_TOKEN_LIST}
                defaultInputTokenAddress="NATIVE"
                defaultOutputTokenAddress="0x2427e231B401E012edacD1c4dD700ea2D4376eD0"
                width="100%"
              />
            </div>
          </div>
        </Card>

        {/* Gallery Section */}
        <div className="max-w-md mx-auto mt-8 grid grid-cols-2 grid-rows-2 gap-4">
          {[
            "/DONYA.gif",
            "/THE_HILL.png",
            "/DON_KING.png",
            "/SKIMASK_DON.gif"
          ].map((src, index) => (
            <div key={index} className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 border-4 border-black shadow-[4px_4px_8px_0px_rgba(0,0,0,0.3)]">
              <Image
                src={src}
                alt={`DON artwork ${index + 1}`}
                fill
                className="object-cover"
                unoptimized={src.endsWith('.gif')}
              />
            </div>
          ))}
        </div>

        {/* Buttons Container */}
        <div className="flex justify-center gap-4 mt-12 mb-20 max-w-[324px] mx-auto">
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg border-4 border-black font-press-start flex-1 hover:animate-[wiggle_1.5s_ease-in-out]"
            style={{ fontSize: '14px' }}
          >
            Coming Soon
          </Button>
          <Button 
            className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-lg border-4 border-black font-press-start flex-1 hover:animate-[wiggle_1.5s_ease-in-out]"
            style={{ fontSize: '14px' }}
            onClick={scrollToSwap}
          >
            Buy $DON
          </Button>
        </div>
      </div>

      {/* Disclaimer Footer */}
      <div className="text-center text-white text-sm italic mt-8 mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
        This coin has no intrinsic value or expectation of financial return.<br />
        This is not financial advice - please dyor!
      </div>

      <AudioPlayer audioSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jay%20Dee%2037%20(Instrumental)-QoxzWgM4DtkvNjpIp60Afh1pw9m8yC.mp3" />
    </main>
  )
}

