import React from 'react';
import {
  Box,
  Input,
  Select,
  FormControl,
  FormLabel,
  Button,
  Stack,
  SimpleGrid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import useEdite from '../hooks/useEdite';
export default function Edite({ userId, user }) {
  const { register, handleSubmit, isSubmitting, onSubmit } = useEdite(userId);

  return (
    <Box p="4" bg="white" rounded="xl" shadow="xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }}>
          <FormControl>
            <FormLabel> userTag</FormLabel>
            <Input
              defaultValue={user?.userTag}
              variant="filled"
              placeholder="userTag"
              {...register('userTag')}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> specifiedUSPerson</FormLabel>
            <Select
              defaultValue={user?.specifiedUSPerson}
              {...register('specifiedUSPerson')}
              variant="filled"
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> controllingPersonType</FormLabel>
            <Select
              defaultValue={user?.controllingPersonType}
              {...register('controllingPersonType')}
              variant="filled"
            >
              <option value={0}>None</option>
              <option value={1}>ShareHolder</option>
              <option value="2">Other relationships</option>
              <option value="3">Director</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> employeeType</FormLabel>
            <Select
              defaultValue={user?.employeeType}
              {...register('employeeType')}
              variant="filled"
            >
              <option value={0}>None</option>
              <option value={1}>Leader</option>
              <option value="2">Employee</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> legalForm</FormLabel>
            <Select defaultValue={user?.legalForm} {...register('legalForm')} variant="filled">
              <option value="">--</option>
              <option value="1000">1000</option>
              <option value="1100">1100</option>
              <option value="1200">1200</option>
              <option value="1300">1300</option>
              <option value="1400">1400</option>
              <option value="1500">1500</option>
              <option value="1600">1600</option>
              <option value="1700">1700</option>
              <option value="1800">1800</option>
              <option value="1900">1900</option>
              <option value="2110">2110</option>
              <option value="2120">2120</option>
              <option value="2210">2210</option>
              <option value="2220">2220</option>
              <option value="2310">2310</option>
              <option value="2320">2320</option>
              <option value="2385">2385</option>
              <option value="2400">2400</option>
              <option value="2700">2700</option>
              <option value="2900">2900</option>
              <option value="3110">3110</option>
              <option value="3120">3120</option>
              <option value="3205">3205</option>
              <option value="3210">3210</option>
              <option value="3220">3220</option>
              <option value="3290">3290</option>
              <option value="4110">4110</option>
              <option value="4120">4120</option>
              <option value="4130">4130</option>
              <option value="4140">4140</option>
              <option value="4150">4150</option>
              <option value="4160">4160</option>
              <option value="5191">5191</option>
              <option value="5192">5192</option>
              <option value="5193">5193</option>
              <option value="5194">5194</option>
              <option value="5195">5195</option>
              <option value="5196">5196</option>
              <option value="5202">5202</option>
              <option value="5203">5203</option>
              <option value="5306">5306</option>
              <option value="5307">5307</option>
              <option value="5308">5308</option>
              <option value="5309">5309</option>
              <option value="5385">5385</option>
              <option value="5410">5410</option>
              <option value="5415">5415</option>
              <option value="5422">5422</option>
              <option value="5426">5426</option>
              <option value="5430">5430</option>
              <option value="5431">5431</option>
              <option value="5432">5432</option>
              <option value="5442">5442</option>
              <option value="5443">5443</option>
              <option value="5451">5451</option>
              <option value="5453">5453</option>
              <option value="5454">5454</option>
              <option value="5455">5455</option>
              <option value="5458">5458</option>
              <option value="5459">5459</option>
              <option value="5460">5460</option>
              <option value="5485">5485</option>
              <option value="5498">5498</option>
              <option value="5499">5499</option>
              <option value="5505">5505</option>
              <option value="5510">5510</option>
              <option value="5515">5515</option>
              <option value="5520">5520</option>
              <option value="5522">5522</option>
              <option value="5525">5525</option>
              <option value="5530">5530</option>
              <option value="5531">5531</option>
              <option value="5532">5532</option>
              <option value="5542">5542</option>
              <option value="5543">5543</option>
              <option value="5546">5546</option>
              <option value="5547">5547</option>
              <option value="5548">5548</option>
              <option value="5551">5551</option>
              <option value="5552">5552</option>
              <option value="5553">5553</option>
              <option value="5554">5554</option>
              <option value="5555">5555</option>
              <option value="5558">5558</option>
              <option value="5559">5559</option>
              <option value="5560">5560</option>
              <option value="5585">5585</option>
              <option value="5599">5599</option>
              <option value="5605">5605</option>
              <option value="5610">5610</option>
              <option value="5615">5615</option>
              <option value="5620">5620</option>
              <option value="5622">5622</option>
              <option value="5625">5625</option>
              <option value="5630">5630</option>
              <option value="5631">5631</option>
              <option value="5632">5632</option>
              <option value="5642">5642</option>
              <option value="5643">5643</option>
              <option value="5646">5646</option>
              <option value="5647">5647</option>
              <option value="5648">5648</option>
              <option value="5651">5651</option>
              <option value="5652">5652</option>
              <option value="5653">5653</option>
              <option value="5654">5654</option>
              <option value="5655">5655</option>
              <option value="5658">5658</option>
              <option value="5659">5659</option>
              <option value="5660">5660</option>
              <option value="5685">5685</option>
              <option value="5699">5699</option>
              <option value="5710">5710</option>
              <option value="5720">5720</option>
              <option value="5785">5785</option>
              <option value="5800">5800</option>
              <option value="6100">6100</option>
              <option value="6210">6210</option>
              <option value="6220">6220</option>
              <option value="6316">6316</option>
              <option value="6317">6317</option>
              <option value="6318">6318</option>
              <option value="6411">6411</option>
              <option value="6521">6521</option>
              <option value="6532">6532</option>
              <option value="6533">6533</option>
              <option value="6534">6534</option>
              <option value="6535">6535</option>
              <option value="6536">6536</option>
              <option value="6537">6537</option>
              <option value="6538">6538</option>
              <option value="6539">6539</option>
              <option value="6540">6540</option>
              <option value="6541">6541</option>
              <option value="6542">6542</option>
              <option value="6543">6543</option>
              <option value="6544">6544</option>
              <option value="6551">6551</option>
              <option value="6554">6554</option>
              <option value="6558">6558</option>
              <option value="6560">6560</option>
              <option value="6561">6561</option>
              <option value="6562">6562</option>
              <option value="6563">6563</option>
              <option value="6564">6564</option>
              <option value="6565">6565</option>
              <option value="6566">6566</option>
              <option value="6567">6567</option>
              <option value="6568">6568</option>
              <option value="6569">6569</option>
              <option value="6571">6571</option>
              <option value="6572">6572</option>
              <option value="6573">6573</option>
              <option value="6574">6574</option>
              <option value="6575">6575</option>
              <option value="6576">6576</option>
              <option value="6577">6577</option>
              <option value="6578">6578</option>
              <option value="6585">6585</option>
              <option value="6588">6588</option>
              <option value="6589">6589</option>
              <option value="6595">6595</option>
              <option value="6596">6596</option>
              <option value="6597">6597</option>
              <option value="6598">6598</option>
              <option value="6599">6599</option>
              <option value="6901">6901</option>
              <option value="7111">7111</option>
              <option value="7112">7112</option>
              <option value="7113">7113</option>
              <option value="7120">7120</option>
              <option value="7150">7150</option>
              <option value="7160">7160</option>
              <option value="7171">7171</option>
              <option value="7172">7172</option>
              <option value="7179">7179</option>
              <option value="7190">7190</option>
              <option value="7210">7210</option>
              <option value="7220">7220</option>
              <option value="7225">7225</option>
              <option value="7229">7229</option>
              <option value="7230">7230</option>
              <option value="7312">7312</option>
              <option value="7313">7313</option>
              <option value="7314">7314</option>
              <option value="7321">7321</option>
              <option value="7322">7322</option>
              <option value="7323">7323</option>
              <option value="7331">7331</option>
              <option value="7340">7340</option>
              <option value="7341">7341</option>
              <option value="7342">7342</option>
              <option value="7343">7343</option>
              <option value="7344">7344</option>
              <option value="7345">7345</option>
              <option value="7346">7346</option>
              <option value="7347">7347</option>
              <option value="7348">7348</option>
              <option value="7349">7349</option>
              <option value="7351">7351</option>
              <option value="7352">7352</option>
              <option value="7353">7353</option>
              <option value="7354">7354</option>
              <option value="7355">7355</option>
              <option value="7356">7356</option>
              <option value="7361">7361</option>
              <option value="7362">7362</option>
              <option value="7363">7363</option>
              <option value="7364">7364</option>
              <option value="7365">7365</option>
              <option value="7366">7366</option>
              <option value="7371">7371</option>
              <option value="7372">7372</option>
              <option value="7373">7373</option>
              <option value="7378">7378</option>
              <option value="7379">7379</option>
              <option value="7381">7381</option>
              <option value="7382">7382</option>
              <option value="7383">7383</option>
              <option value="7384">7384</option>
              <option value="7385">7385</option>
              <option value="7389">7389</option>
              <option value="7410">7410</option>
              <option value="7430">7430</option>
              <option value="7450">7450</option>
              <option value="7470">7470</option>
              <option value="7490">7490</option>
              <option value="8110">8110</option>
              <option value="8120">8120</option>
              <option value="8130">8130</option>
              <option value="8140">8140</option>
              <option value="8150">8150</option>
              <option value="8160">8160</option>
              <option value="8170">8170</option>
              <option value="8190">8190</option>
              <option value="8210">8210</option>
              <option value="8250">8250</option>
              <option value="8290">8290</option>
              <option value="8310">8310</option>
              <option value="8311">8311</option>
              <option value="8410">8410</option>
              <option value="8420">8420</option>
              <option value="8450">8450</option>
              <option value="8470">8470</option>
              <option value="8490">8490</option>
              <option value="8510">8510</option>
              <option value="8520">8520</option>
              <option value="9110">9110</option>
              <option value="9150">9150</option>
              <option value="9210">9210</option>
              <option value="9220">9220</option>
              <option value="9221">9221</option>
              <option value="9222">9222</option>
              <option value="9223">9223</option>
              <option value="9224">9224</option>
              <option value="9230">9230</option>
              <option value="9240">9240</option>
              <option value="9260">9260</option>
              <option value="9300">9300</option>
              <option value="9900">9900</option>
              <option value="9970">9970</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> title</FormLabel>
            <Select defaultValue={user?.title} {...register('title')} variant="filled">
              <option value="M">M</option>
              <option value="MME">MME</option>
              <option value="MLLE">MLLE</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> incomeRange</FormLabel>
            <Select defaultValue={user?.incomeRange} {...register('incomeRange')} variant="filled">
              <option value="0-18">0-18</option>
              <option value="19-23">19-23</option>
              <option value="24-27">24-27</option>
              <option value="28-35">28-35</option>
              <option value="36-56">36-56</option>
              <option value="57-*">57-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> firstname</FormLabel>
            <Input
              defaultValue={user?.firstname}
              {...register('firstname')}
              variant="filled"
              placeholder="firstname"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> lastname</FormLabel>
            <Input
              defaultValue={user?.lastname}
              {...register('lastname')}
              variant="filled"
              placeholder="lastname"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> middleNames</FormLabel>
            <Input
              defaultValue={user?.middleNames}
              {...register('middleNames')}
              variant="filled"
              placeholder="middleNames"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> birthday</FormLabel>
            <Input
              defaultValue={user?.birthday}
              {...register('birthday')}
              variant="filled"
              placeholder="User's birth date. Format YYYY-MM-DD"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> email</FormLabel>
            <Input
              defaultValue={user?.email}
              {...register('email')}
              variant="filled"
              placeholder="email"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> address1</FormLabel>
            <Input
              defaultValue={user?.address1}
              {...register('address1')}
              variant="filled"
              placeholder="address1"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> address2</FormLabel>
            <Input
              defaultValue={user?.address2}
              {...register('address2')}
              variant="filled"
              placeholder="address2"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> address3</FormLabel>
            <Input
              defaultValue={user?.address3}
              {...register('address3')}
              variant="filled"
              placeholder="address3"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> postcode</FormLabel>
            <Input
              defaultValue={user?.postcode}
              {...register('postcode')}
              variant="filled"
              placeholder="postcode"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> city</FormLabel>
            <Input
              defaultValue={user?.city}
              {...register('city')}
              variant="filled"
              placeholder="city"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> state</FormLabel>
            <Input
              defaultValue={user?.state}
              {...register('state')}
              variant="filled"
              placeholder="state"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> country</FormLabel>
            <Input
              defaultValue={user?.country}
              {...register('country')}
              variant="filled"
              placeholder="country"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> phone</FormLabel>
            <Input
              defaultValue={user?.phone}
              {...register('phone')}
              variant="filled"
              placeholder="phone"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> mobile</FormLabel>
            <Input
              defaultValue={user?.mobile}
              {...register('mobile')}
              variant="filled"
              placeholder="mobile"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> nationality</FormLabel>
            <Input
              defaultValue={user?.nationality}
              {...register('nationality')}
              variant="filled"
              placeholder="nationality"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> nationalityOther</FormLabel>
            <Input
              defaultValue={user?.nationalityOther}
              {...register('nationalityOther')}
              variant="filled"
              placeholder="nationalityOther"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> placeOfBirth</FormLabel>
            <Input
              defaultValue={user?.placeOfBirth}
              {...register('placeOfBirth')}
              variant="filled"
              placeholder="placeOfBirth"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> birthCountry</FormLabel>
            <Input
              defaultValue={user?.birthCountry}
              {...register('birthCountry')}
              variant="filled"
              placeholder="birthCountry"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> occupation</FormLabel>
            <Input
              defaultValue={user?.occupation}
              {...register('occupation')}
              variant="filled"
              placeholder="occupation"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalName</FormLabel>
            <Input
              defaultValue={user?.legalName}
              {...register('legalName')}
              variant="filled"
              placeholder="legalName"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalRegistrationNumber</FormLabel>
            <Input
              defaultValue={user?.legalRegistrationNumber}
              {...register('legalRegistrationNumber')}
              variant="filled"
              placeholder="legalRegistrationNumber"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalTvaNumber</FormLabel>
            <Input
              defaultValue={user?.legalTvaNumber}
              {...register('legalTvaNumber')}
              variant="filled"
              placeholder="legalTvaNumber"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalRegistrationDate</FormLabel>
            <Input
              defaultValue={user?.legalRegistrationDate}
              {...register('legalRegistrationDate')}
              variant="filled"
              placeholder="legalRegistrationDate"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalShareCapital</FormLabel>
            <Input
              defaultValue={user?.legalShareCapital}
              {...register('legalShareCapital')}
              variant="filled"
              placeholder="Business share capital"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalSector</FormLabel>
            <Input
              defaultValue={user?.legalSector}
              {...register('legalSector')}
              variant="filled"
              placeholder="Business sector. NAF code in France"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalAnnualTurnOver</FormLabel>
            <Select
              defaultValue={user?.legalAnnualTurnOver}
              {...register('legalAnnualTurnOver')}
              variant="filled"
            >
              <option value="">Business annual turnover (in k€)</option>

              <option value="0-39">0-39</option>
              <option value="40-99">40-99</option>
              <option value="100-249">100-249</option>
              <option value="250-999">250-999</option>
              <option value="1000-2999">1000-2999</option>
              <option value="3000-9999">3000-9999</option>
              <option value="10000-99999">10000-99999</option>
              <option value="100000-*">100000-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> legalNetIncomeRange</FormLabel>
            <Select
              defaultValue={user?.legalNetIncomeRange}
              {...register('legalNetIncomeRange')}
              variant="filled"
            >
              <option value="">Business net income range (in k€)</option>

              <option value="0-4">0-4</option>
              <option value="5-9">5-9</option>
              <option value="10-49">10-49</option>
              <option value="50-149">50-149</option>
              <option value="150-499">150-499</option>
              <option value="500-*">500-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> legalNumberOfEmployeeRange</FormLabel>
            <Select
              defaultValue={user?.legalNumberOfEmployeeRange}
              {...register('legalNumberOfEmployeeRange')}
              variant="filled"
            >
              <option value="">Business number of employees range</option>

              <option value="0">0</option>
              <option value="1-9">1-9</option>
              <option value="10-99">10-99</option>
              <option value="100-249">100-249</option>
              <option value="250-*">250-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> effectiveBeneficiary</FormLabel>
            <Input
              defaultValue={user?.effectiveBeneficiary}
              {...register('effectiveBeneficiary')}
              variant="filled"
              placeholder="Business effective beneficiary

"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> language</FormLabel>
            <Input
              defaultValue={user?.language}
              {...register('language')}
              variant="filled"
              placeholder="User's prefered language (ISO 639-1)
"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> taxNumber</FormLabel>
            <Input
              defaultValue={user?.taxNumber}
              {...register('taxNumber')}
              variant="filled"
              placeholder="User's tax identification number. If the taxResidence is not set to FR, the field is mandatory.


"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> taxResidence</FormLabel>
            <Input
              defaultValue={user?.taxResidence}
              {...register('taxResidence')}
              variant="filled"
              placeholder="User's tax residence country code (2 char code following ISO 3166 norm)."
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> position</FormLabel>
            <Input
              defaultValue={user?.position}
              {...register('position')}
              variant="filled"
              placeholder="position"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> personalAssets</FormLabel>
            <Select
              defaultValue={user?.personalAssets}
              {...register('personalAssets')}
              variant="filled"
            >
              <option value="">User's personal assets range exprimed in K€.</option>
              <option value="0-2">0-2</option>
              <option value="3-22">3-22</option>
              <option value="23-128">23-128</option>
              <option value="129-319">129-319</option>
              <option value="320-464">320-464</option>
              <option value="465-">465-</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> activityOutsideEu</FormLabel>
            <Select
              defaultValue={user?.activityOutsideEu}
              {...register('activityOutsideEu')}
              variant="filled"
            >
              <option value="">Commercial activity outside of EU (only for Professionals)</option>
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> economicSanctions</FormLabel>
            <Select
              defaultValue={user?.economicSanctions}
              {...register('economicSanctions')}
              variant="filled"
            >
              <option value="">
                Company, subsidiaries, entities, employees, directors, joint ventures are subject to
                Economic Sanctions (only for Professionals)
              </option>
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> residentCountriesSanctions</FormLabel>
            <Select
              defaultValue={user?.residentCountriesSanctions}
              {...register('residentCountriesSanctions')}
              variant="filled"
            >
              <option value="">
                Company, subsidiaries, entities, employees, directors, joint ventures are subject to
                Economic Sanctions (only for Professionals)
              </option>
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> involvedSanctions</FormLabel>
            <Select
              defaultValue={user?.involvedSanctions}
              {...register('involvedSanctions')}
              variant="filled"
            >
              <option value="">
                Company involved in countries or with people subject to Economic Sanctions after
                careful review (only for Professionals)
              </option>
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> timezone</FormLabel>
            <Input
              defaultValue={user?.timezone}
              {...register('timezone')}
              variant="filled"
              placeholder="timezone"
            ></Input>
          </FormControl>
        </SimpleGrid>
        <Flex my="8" justifyContent="flex-end">
          <Button
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            type="submit"
            colorScheme="green"
          >
            Éditer
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
