
import favButtonInitiator from "../src/scripts/utils/fav-button-presenter";
import FavoriteRestoIdb from "../src/scripts/data/fav-resto-idb";
import * as TestFactories from './helpers/testFactories';


describe('Favorite A Restaurant', () => {

    const addfavButtonContainer = () => {
        document.body.innerHTML = '<div id="favButtonContainer"></div>';
    };

    beforeEach(() => {
        addfavButtonContainer();
    });

    it('should show the favorite button when the restaurant has not been favorited before', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        
        expect(document.querySelector('[aria-label="sukai restoran ini"]')).toBeTruthy();
   
    });

    it('should not show the favorite button when the restaurant has been favorited before', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        
        expect(document.querySelector('[aria-label="tidak suka restoran ini"]')).toBeFalsy();
    })

    it('should be able to favorite a restaurant', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

        document.querySelector('#favButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestoIdb.getResto(1);

        expect(restaurant).toEqual({ id: 1 });
        await FavoriteRestoIdb.deleteResto(1);

    })

    it('should not add a restaurant again when its already favorited', async () => {

        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

        await FavoriteRestoIdb.putResto({ id: 1 });
        document.querySelector('#favButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
        await FavoriteRestoIdb.deleteResto(1);

    })

    it('should not add a restaurant when it has no id', async () => {

        await TestFactories.createFavButtonPresenterWithResto({});

        document.querySelector('#favButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);

    })

  });