package shop.vlon.shopapi.payload.response;

import lombok.Data;

@Data
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String account;
    private String name;
    private String role;
    private String message;

    public JwtResponse(String token, String account, String name, String role, String message) {
        this.account = account;
        this.name = name;
        this.token = token;
        this.role = role;
        this.message=message;
    }
}
