import favButtonInitiator from "../src/scripts/utils/fav-button-presenter";
import FavoriteRestoIdb from "../src/scripts/data/fav-resto-idb";
import * as TestFactories from './helpers/testFactories';


describe('Unfavorite A Restaurant', () => {

    const addfavButtonContainer = () => {
        document.body.innerHTML = '<div id="favButtonContainer"></div>';
    };

    beforeEach(async () => {
        addfavButtonContainer();
        await FavoriteRestoIdb.putResto({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestoIdb.deleteResto(1);
    });
    

    it('should show the unfavorite button when the restaurant has been favorited before', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        
        expect(document.querySelector('[aria-label="tidak suka restoran ini"]')).toBeTruthy();

    });

    it('should not show the favorite button when the restaurant has been favorited before', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        
        expect(document.querySelector('[aria-label="sukai restoran ini"]')).toBeFalsy();

    });

    it('should be able to remove favorited restaurant from the list', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

        document.querySelector('[aria-label="tidak suka restoran ini"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);

    })

    it('should not throw error when user click the unfavorite button if unfavored restaurant is not in the list', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

        await FavoriteRestoIdb.deleteResto(1);

        document.querySelector('[aria-label="tidak suka restoran ini"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);

    })
});