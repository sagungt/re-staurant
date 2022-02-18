import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiDicodingSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(query) {
    const url = new URL(API_ENDPOINT.SEARCH);
    url.search = new URLSearchParams(query).toString();
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async addNewReview(payload) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(payload),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantApiDicodingSource;
