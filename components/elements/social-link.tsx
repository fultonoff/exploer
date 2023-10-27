import React from 'react'
import Link from 'next/link'
import { Facebook, Github, Instagram } from 'lucide-react'



const SocialLink = ({platform, link}: {platform: string; link: string | ''}) => {
    const getIcon = (platform: string)=>{
        switch(platform) {
            case "facebook": return <Facebook size={18}/>;
            case "github": return <Github size={18}/>;
            case "instagram": return <Instagram size={18}/>;
        }
    }
  return (
    <Link href={link}>
      {getIcon(platform)}
    </Link>
  )
}

export default SocialLink
