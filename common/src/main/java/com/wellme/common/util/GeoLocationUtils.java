/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestTemplate;

import com.wellme.common.model.Coordinates;

/**
 * The Class GeoLocationUtils.
 */
public class GeoLocationUtils {
    
    /** The Constant STATUS_OK. */
    public static final String STATUS_OK = "OK"; 
    
    /** The Constant STATUS_ZERO_RESULTS. */
    public static final String STATUS_ZERO_RESULTS = "ZERO_RESULTS"; 
    
    /** The Constant STATUS_OVER_QUERY_LIMIT. */
    public static final String STATUS_OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT"; 
    
    /** The Constant STATUS_REQUEST_DENIED. */
    public static final String STATUS_REQUEST_DENIED = "REQUEST_DENIED"; 
    
    /** The Constant STATUS_INVALID_REQUEST. */
    public static final String STATUS_INVALID_REQUEST = "INVALID_REQUEST"; 
    
    /** The miles per nautical mile. */
    public static double MILES_PER_NAUTICAL_MILE = 1.15077945;
    
    /** The kms per nautical mile. */
    public static double KMS_PER_NAUTICAL_MILE = 1852;
	
	/** The google map api URL. */
	@Value("$(google.map.api.url)")
	private String googleMapApiURL;
	
	/** The google map api URL. */
	@Value("$(google.map.api.key)")
	private String googleMapApiKey;
	
	/** The google map rest template. */
	@Autowired
	private RestTemplate googleMapRestTemplate;
	
	/**
	 * Gets the coordinates from address.
	 *
	 * @param address the address
	 * @param country the country
	 * @return the coordinates from address
	 */
	public Coordinates getCoordinatesFromAddress(String address){
	    address = address.replace(",", "+");
	    address = address.replace(" ", "+");	
	    
	    Map<String, String> vars = new HashMap<>();
	    vars.put("address", address);
	    vars.put("key", googleMapApiKey);
	    
		Map<?, ?> obj = googleMapRestTemplate.getForObject(googleMapApiURL, Map.class, vars); 
		 
        // check the response status 
        String status = (String) obj.get("status"); 
        if (!status.equals(STATUS_OK)) { 
            throw new RuntimeException(buildMessage(status)); 
        } 
 
        List<?> results = (List<?>) obj.get("results"); 
        Map<?, ?> result = (Map<?, ?>) results.get(0); 
        Map<?, ?> geometry = (Map<?, ?>) result.get("geometry"); 
        Map<?, ?> location = (Map<?, ?>) geometry.get("location"); 
 
        return new Coordinates(
                (Double) location.get("lat"), 
                (Double) location.get("lng") );
        
        
	}
	
	/**
	 * Gets the distance between coordinates.
	 *
	 * @param coord1 the coord 1
	 * @param coord2 the coord 2
	 * @param inKms the in kms
	 * @return the distance between coordinates
	 */
	public static double getDistanceBetweenCoordinates(Coordinates coord1, Coordinates coord2, boolean inKms){
		
        double lat1 = Math.toRadians(coord1.getLattitude());
        double lon1 = Math.toRadians(coord1.getLongitude());
        double lat2 = Math.toRadians(coord2.getLattitude());
        double lon2 = Math.toRadians(coord2.getLongitude());

        // great circle distance in radians, using law of cosines formula
        double angle = Math.acos(Math.sin(lat1) * Math.sin(lat2)
                               + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));

        // each degree on a great circle of Earth is 60 nautical miles
        double nauticalMiles = 60 * Math.toDegrees(angle);
        double distance = inKms ? KMS_PER_NAUTICAL_MILE * nauticalMiles : MILES_PER_NAUTICAL_MILE * nauticalMiles;
        return distance;
	}
		
    /**
     * Builds the message.
     *
     * @param status the status
     * @return the string
     */
    private String buildMessage(String status) { 
        if (status == STATUS_ZERO_RESULTS) 
            return "No result is found"; 
        else if (status == STATUS_OVER_QUERY_LIMIT) 
            return "You are over your quota"; 
        else if (status == STATUS_REQUEST_DENIED) 
            return "Your request was denied"; 
        else if (status == STATUS_INVALID_REQUEST) 
            return "The query is missing"; 
 
        return ""; 
    } 
}
