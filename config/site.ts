
export interface siteConfig{
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLink:{
        github?:string,
        linkedin?:string,
        twitter?:string,
        instagram?:string,
    }
    
}



const siteConfig: siteConfig ={
    siteName: 'Explorer',
    description: 'A minimal and lovely travel blog which shares experiences and cities around',
    currentlyAt: 'Brazzaville',
    socialLink:{
        twitter:'https://twitter.com/john_doe1234567890',
        instagram:'https://www.instagram.com/fulton.dev1/',
        github: 'https://github.com/fultonoff'
    }

}

export default siteConfig