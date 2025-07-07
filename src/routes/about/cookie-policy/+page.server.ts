import type { PageServerLoad } from './$types';
import { google } from 'googleapis';
import {
	GOOGLE_APPLICATION_CREDENTIALS,
	DEV_GOOGLE_APPLICATION_CREDENTIALS,
	SHEET_ID
} from '$env/static/private';
import { APP_ENV, APP_ENV_DEV } from '$constants';

const keyPath =
	APP_ENV === APP_ENV_DEV ? DEV_GOOGLE_APPLICATION_CREDENTIALS : GOOGLE_APPLICATION_CREDENTIALS;

interface GSheetDataObject {
	isSuccess: boolean;
	title: string;
	subtitle: string;
	content: string;
}

export const load: PageServerLoad = async ({ url }) => {
	return {
		metaData: {
			currentUrl: url.href,
			orginUrl: url.origin,
			path: url.pathname,
			title: 'Cookies',
			description: 'Политика за използване на бисквитките - cookies',
			type: 'article'
		},
		terms: fetchTermsFtomGSheet()
	};
};
const sheetOnErrorResponse: GSheetDataObject[] = [
	{
		isSuccess: false,
		title: 'empty',
		subtitle: 'Не успешно изтегляне на данните',
		content: 'Извинете ни! Изглежда нашият сървър е недостъпен в момента. Моля опитайте по късно.'
	}
];
async function fetchTermsFtomGSheet(): Promise<GSheetDataObject[]> {
	try {
		const auth = await google.auth.getClient({
			keyFilename: keyPath,
			scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
		});
		const sheets = google.sheets({ version: 'v4', auth });
		const range = `cookies!A5:C35`;
		const res = await sheets.spreadsheets.values.get({
			spreadsheetId: SHEET_ID,
			range
		});
		return res && res.data && res.data?.values
			? responseToObj(res.data.values)
			: sheetOnErrorResponse;
	} catch (error) {
		console.log('fetchTermsFtomGSheet failed', error);
		return sheetOnErrorResponse;
	}
}
function responseToObj(data: string[][]): GSheetDataObject[] {
	return data.map((v) => ({
		isSuccess: true,
		title: v[0],
		subtitle: v[1],
		content: v[2]
	}));
}
