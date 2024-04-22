import favButtonPresenter from "../../src/scripts/utils/fav-button-presenter";

const createFavButtonPresenterWithResto = async (resto) => {
    await favButtonPresenter.init({
        favButtonContainer: document.querySelector('#favButtonContainer'),
        resto,
    });
};

export { createFavButtonPresenterWithResto };