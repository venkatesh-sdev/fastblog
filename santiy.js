import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'


// configuration file which contains the data's and connection of the sanity cms

export const config = {
    dataset:process.env.NEXT_SANITY_PUBLIC_DATASET || 'production',
    projectId:`${process.env.NEXT_SANITY_PUBLIC_PROJECTID}`,
    apiVersion:'2021-10-21',
    useCdn : process.env.NODE_ENV === 'production'
}


// create a client and export it

export const sanityClient = createClient(config);

// create a urlBuilder for change the reference id to Url ;

        // createImageUrlBuilder create a connection to the sanity CMS and image change the source into url the source is passed form the call part of the function

export const urlBuilder = source=> createImageUrlBuilder(config).image(source);






