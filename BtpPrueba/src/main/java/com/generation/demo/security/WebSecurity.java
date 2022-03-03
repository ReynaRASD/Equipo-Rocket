package com.generation.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import static com.generation.demo.security.Constants.HEADER_AUTHORIZACION_KEY;
import static com.generation.demo.security.Constants.LOGIN_URL;

@Configuration
@EnableWebSecurity                                               
public class WebSecurity extends WebSecurityConfigurerAdapter {


    @Bean                                                                  
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        /*
         * 1. Se desactiva el uso de cookies
         * 2. Se activa la configuraciÃ³n CORS con los valores por defecto
         * 3. Se desactiva el filtro CSRF                                 
         * 4. Se indica que el login no requiere autenticaciÃ³n
         * 5. Se indica que el resto de URLs esten securizadas
         */
        httpSecurity
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .cors().and()
                .csrf().disable()
                .authorizeRequests().antMatchers(HttpMethod.POST, LOGIN_URL).permitAll()          
                .antMatchers(HttpMethod.POST, "/api/user").permitAll()                            
                .anyRequest().authenticated().and()                                               
                .addFilter(new JWTAuthenticationFilter(authenticationManager()))                  
                .addFilter(new JWTAuthorizationFilter(authenticationManager()));                  
    }

    @Bean                                                                                     
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration cors = new CorsConfiguration();
        cors.applyPermitDefaultValues().addExposedHeader(HEADER_AUTHORIZACION_KEY);
        source.registerCorsConfiguration("/**", cors);
        return source;
    }
}
