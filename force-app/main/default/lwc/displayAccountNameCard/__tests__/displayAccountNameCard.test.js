import { createElement } from '@lwc/engine-dom';
import DisplayAccountNameCard from 'c/displayAccountNameCard';
import getMyAccounts from '@salesforce/apex/DisplayAccountController.getMyAccounts';

jest.mock('@salesforce/apex/DisplayAccountController.getMyAccounts',
    () => { return { default: jest.fn() } },
    { virtual: true }

);

describe('c-display-account-name-card', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders the display account name card', () => {
        // Arrange
        const element = createElement('c-display-account-name-card', {
            is: DisplayAccountNameCard
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const div = element.shadowRoot.querySelector('div');
        // expect(1).toBe(1);
        expect(div.textContent).toBe('Name: ');
    });
});