import UrlParser from '../../routes/url-parser';
import RestaurantResource from '../../data/restaurant-resource';
// eslint-disable-next-line import/no-unresolved
import createRestaurantDetailMenu from '../templates/detail-restaurant';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const rest = await RestaurantResource.detailRestaurant(url.id);
    const movieContainer = document.querySelector('#restaurant');
    movieContainer.innerHTML = createRestaurantDetailMenu(rest.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: rest.restaurant.id,
        name: rest.restaurant.name,
        rating: rest.restaurant.rating,
        pictureId: rest.restaurant.pictureId,
        city: rest.restaurant.city,
        description: rest.restaurant.description,
      },
    });
  },
};

export default Detail;
