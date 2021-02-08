import axios, { AxiosPromise } from 'axios';
import { Currency } from '../store/reducers/currenciesPageReducer';

export const getCurrencies = (): AxiosPromise<Currency[]> => axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0');

export const getRssNews = (rssNewsUrl: string): AxiosPromise<any> => axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${rssNewsUrl}`);