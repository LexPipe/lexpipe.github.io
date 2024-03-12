import {RootLayout, RootDocumentLayout} from '@/components/RootLayout'
import Document, {Head, Html, Main, NextScript} from 'next/document'


export default class LexPipeDocument extends Document {
    render() {
        return <RootDocumentLayout/>;
    }
}

