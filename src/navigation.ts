import { CardMessage, ICardMessage } from './hangoutsCardMsgBuilder';

export interface INavigationGraph {
    [key: string]: {
        text: string;
        children: Array<string>;
        parent: string | null;
    }
}

export class Navigation {
    private navGraph: INavigationGraph;

    constructor(graph: INavigationGraph) {
        this.navGraph = graph;
    }

    getCardMessage(currentNav: string): ICardMessage | null {
        if (!this.navGraph[currentNav]) return null;
        const cardMsg = new CardMessage();
        const node = this.navGraph[currentNav];
        cardMsg.addSection().addTextParagraphWidget(node.text);
        for (let i = 0; i < node.children.length; i++) {
            const actionId = node.children[i];
            const child = this.navGraph[node.children[i]];
            if (child) {
                cardMsg.addSection().addButtonsWidget().addImageButton("", actionId).addTextButton(child.text, actionId);
            }
        }
        if (node.parent) {
            cardMsg.addSection().addButtonsWidget().addImageButton("", node.parent).addTextButton("Back", node.parent);
        }
        return cardMsg.value();
    }
}
