export interface LegalSection {
heading: string;
body?: string;
list?: string[];
}

export interface LegalContentItem {
title: string;
date: string;
sections: LegalSection[];
}

export interface LegalContentType {
terms: LegalContentItem;
privacy: LegalContentItem;
cookies: LegalContentItem;
}

