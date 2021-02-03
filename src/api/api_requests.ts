import axios from 'axios';

export const getCurrencies = () => axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0');

export const getRssNews = (rssNewsUrl: string) => axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${rssNewsUrl}`);