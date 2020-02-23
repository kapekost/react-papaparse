import PapaParse from 'papaparse'

export { default as CSVReader } from './CSVReader'
export { readString } from './readString'
export { readRemoteFile } from './readRemoteFile'
export { jsonToCSV } from './jsonToCSV'

// Draft
export { default as CSVReaderDraft } from './CSVReaderDraft'

export { default as CSVReaderRewrite } from './CSVReaderRewrite'

export const BAD_DELIMITERS = PapaParse.BAD_DELIMITERS
export const RECORD_SEP = PapaParse.RECORD_SEP
export const UNIT_SEP = PapaParse.UNIT_SEP
export const WORKERS_SUPPORTED = PapaParse.WORKERS_SUPPORTED

export const LocalChunkSize = PapaParse.LocalChunkSize
export const DefaultDelimiter = PapaParse.DefaultDelimiter
