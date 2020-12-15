export interface IOnClickAction {
    action: {
        actionMethodName: string;
    }
}

export interface IImageButton {
    imageButton: {
        iconUrl: string;
        onClick: IOnClickAction;
    }
}

export interface ITextButton {
    textButton: {
        text: string;
        onClick: IOnClickAction;
    }
}

export type IButton = IImageButton | ITextButton;

export interface ITextParagraphWidget {
    textParagraph: {
        text: string;
    }
}

class ButtonsWidget {
    buttons: Array<IButton>;
    constructor() {
        this.buttons = [];
    }
    addImageButton(iconUrl: string, actionMethodName: string) {
        const imageButton: IImageButton = {
            imageButton: {
                iconUrl,
                onClick: {
                    action: {
                        actionMethodName
                    }
                }
            }
        }
        this.buttons.push(imageButton);
        return this;
    }
    addTextButton(text: string, actionMethodName: string) {
        const textButton: ITextButton = {
            textButton: {
                text,
                onClick: {
                    action: {
                        actionMethodName
                    }
                }
            }
        }
        this.buttons.push(textButton);
        return this;
    }
}

export type IWidget = ITextParagraphWidget | ButtonsWidget;

class Section {
    widgets: Array<IWidget>;
    constructor() {
        this.widgets = [];
    }
    addTextParagraphWidget(text: string) {
        const textWidget: ITextParagraphWidget = {
            textParagraph: {
                text
            }
        }
        this.widgets.push(textWidget);
        return this;
    }
    addButtonsWidget() {
        const buttonsWidget = new ButtonsWidget();
        this.widgets.push(buttonsWidget);
        return buttonsWidget;
    }
}

export interface ICard {
    sections: Array<Section>;
}

export interface ICardMessage {
    cards: Array<ICard>;
}

export class CardMessage {
    private cardMessage: ICardMessage;
    constructor() {
        this.cardMessage = {
            cards: [
                {
                    "sections": []
                }
            ]
        }
    }
    addSection() {
        const newSection = new Section();
        this.cardMessage.cards[0].sections.push(newSection);
        return newSection;
    }
    toJSON() {
        return JSON.stringify(this.cardMessage, null, 2);
    }
    value() {
        return JSON.parse(JSON.stringify(this.cardMessage));
    }
}