export interface ElementsSection1 {
    title: string;
    subtitle: string;
    link_button: string;
}

export interface ElementsSection2 {
    link_youtube: string;
    title: string;
    text: string;
}

export interface ElementsSection3 {
    link_youtube: string;
    title: string;
    text: string;
}

interface GroupSection4 {
    box_section_4: string;
}

export interface ElementsSection4 {
    title: string;
    group: GroupSection4[];
}

interface GroupSection5 {
    title_box_section_5: {text: string};
    text_box_section_5: {text: string};
}

export interface ElementsSection5 {
    title: string;
    subtitle: string;
    group: GroupSection5[];
}

export interface ElementsSection6 {
    title: string;
    text: string;
}

export interface ElementsSection7 {
    title: string;
    lowest_price: number;
    price_total: number;
    link_button: string;
}

export interface ElementsSection8 {
    title: string;
    subtitle_2: string;
    link_button: string;
    title_2: string;
    text_2: string;
}