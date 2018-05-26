package com.wellme.practice.object.factory;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.common.model.Address;
import com.wellme.common.model.Phone;
import com.wellme.practice.id.generator.InsuranceProviderIdProvider;
import com.wellme.practice.model.InsuranceProvider;

@Component
public class InsuranceProviderFactory {
	
	@Autowired
	InsuranceProviderIdProvider idProvider;
	
	public InsuranceProvider createInsuranceProvider(String insuranceProviderName, Phone phone,
			Address address, List<BigInteger> insuranceTypeIds, Date insTs, Date updTs, String insLogin, String updLogin){
		return new InsuranceProvider(idProvider.getNextId(), insuranceProviderName, phone, address, insuranceTypeIds, insTs, updTs, insLogin, updLogin, 0L, Long.MIN_VALUE);
	}

}
