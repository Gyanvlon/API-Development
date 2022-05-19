package shop.vlon.shopapi.service;

import shop.vlon.shopapi.entity.ProductInOrder;
import shop.vlon.shopapi.entity.User;

public interface ProductInOrderService {
    void update(String itemId, Integer quantity, User user);
    ProductInOrder findOne(String itemId, User user);
}
