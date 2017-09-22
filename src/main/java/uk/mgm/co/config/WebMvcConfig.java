package uk.mgm.co.config;

import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.converter.BufferedImageHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Rachael McCoy on 06/06/2017.
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {
    @Bean
    public HttpMessageConverters httpMessageConverters() {
        List<HttpMessageConverter<?>> additionalConverters = new ArrayList<>();
        additionalConverters.add(new BufferedImageHttpMessageConverter());
        return new HttpMessageConverters(true, additionalConverters);
    }

    @Bean
    public ViewResolver getViewResolver(){
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/templates/");
        resolver.setSuffix(".html");
        return resolver;
    }

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
            "/templates/**", "classpath:/resources/",
            "classpath:/static/", "classpath:/templates/" };

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/templates/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
        super.addResourceHandlers(registry);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("login");
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
    }
}
