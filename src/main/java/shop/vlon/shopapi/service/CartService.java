package shop.vlon.shopapi.service;

import shop.vlon.shopapi.entity.Cart;
import shop.vlon.shopapi.entity.ProductInOrder;
import shop.vlon.shopapi.entity.User;

import java.util.Collection;

public interface CartService {
    Cart getCart(User user);

    void mergeLocalCart(Collection<ProductInOrder> productInOrders, User user);

    void delete(String itemId, User user);

    void checkout(User user);
}
