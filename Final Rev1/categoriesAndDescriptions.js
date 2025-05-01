var categories = [
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Licensing",
      "Variable Name": "dealer",
      "Brief Description of Provision": "State dealer license required for sale of all firearms",
      "Detailed Description of Provision": "All firearm dealers are required to have a state license."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Licensing",
      "Variable Name": "dealerh",
      "Brief Description of Provision": "State dealer license required for sale of handguns",
      "Detailed Description of Provision": "All firearm dealers that sell handguns are required to have a state license."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Recordkeeping",
      "Variable Name": "recordsdealer",
      "Brief Description of Provision": "Licensed dealers are required to keep and retain records of all firearm sales",
      "Detailed Description of Provision": "Licensed dealers are required to keep and retain records of all firearm sales. These records must include (1) the name and address of the buyer and (2) the make, model, and type of firearm."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Recordkeeping",
      "Variable Name": "recordsdealerh",
      "Brief Description of Provision": "Licensed dealers are required to keep and retain records of handgun sales",
      "Detailed Description of Provision": "Licensed dealers are required to keep and retain records of handgun sales. These records must include (1) the name and address of the buyer and (2) the make, model, and type of handgun."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Recordkeeping",
      "Variable Name": "recordsall",
      "Brief Description of Provision": "All private sellers and licensed dealers are required to keep and retain records of all firearm sales",
      "Detailed Description of Provision": "Both private sellers and licensed dealers are required to keep and retain records of all firearm sales. These records must include (1) the name and address of the buyer and (2) the make, model, and type of firearm."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Recordkeeping",
      "Variable Name": "recordsallh",
      "Brief Description of Provision": "All private sellers and licensed dealers are required to keep and retain records of handgun sales",
      "Detailed Description of Provision": "Both private sellers and licensed dealers are required to keep and retain records of handgun sales. These records must include (1) the name and address of the buyer and (2) the make, model, and type of handgun."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Reporting",
      "Variable Name": "reportdealer",
      "Brief Description of Provision": "Licensed dealers are required to report all firearm sales records to the state",
      "Detailed Description of Provision": "Licensed dealers are required to report all firearm sales records to the state. Must include gun and sale information and must be transmitted electronically or by mail (not just phoned in)."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Reporting",
      "Variable Name": "reportdealerh",
      "Brief Description of Provision": "Licensed dealers are required to report handgun sales records to the state",
      "Detailed Description of Provision": "Licensed dealers are required to report handgun sales records to the state. Must include gun and sale information and must be transmitted electronically or by mail (not just phoned in)."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Reporting",
      "Variable Name": "reportall",
      "Brief Description of Provision": "All private sellers and licensed dealers are required to report all firearm sales records to the state",
      "Detailed Description of Provision": "All private sellers and licensed dealers are required to report all firearm sales records to the state. Must include gun and sale information and must be transmitted electronically or by mail (not just phoned in)."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Reporting",
      "Variable Name": "reportallh",
      "Brief Description of Provision": "All private sellers and licensed dealers are required to report handgun sales records to the state",
      "Detailed Description of Provision": "All private sellers and licensed dealers are required to report handgun sales records to the state. Must include gun and sale information and must be transmitted electronically or by mail (not just phoned in)."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Reporting",
      "Variable Name": "purge",
      "Brief Description of Provision": "Dealers can retain sales records for at least 60 days after firearm purchase",
      "Detailed Description of Provision": "The law does NOT require that dealers purge their sales records within 60 days of the firearm purchase. This may apply to handgun sales records, long gun sales records, or both."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Location",
      "Variable Name": "residential",
      "Brief Description of Provision": "Ban on non-commercial dealers",
      "Detailed Description of Provision": "Dealers must have a commercial place of business; they cannot operate out of a home, car, etc."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Theft reporting",
      "Variable Name": "theft",
      "Brief Description of Provision": "Mandatory reporting of stolen guns by all firearm dealers",
      "Detailed Description of Provision": "Dealers must report any and all thefts of firearms from their businesses."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Security",
      "Variable Name": "security",
      "Brief Description of Provision": "State requires at least one store security precaution for firearm dealers",
      "Detailed Description of Provision": "At least one of the following is required for gun dealers: (1) No gun displays visible from the outside; (2) Guns must be stored in a specified manner after business hours; (3) Burglar alarms and/or security systems installed."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Inspections",
      "Variable Name": "inspection",
      "Brief Description of Provision": "Mandatory police inspections of dealers",
      "Detailed Description of Provision": "The law requires at least one annual inspection of gun dealerships by the police or other law enforcement personnel. This refers to a STATE inspection, not an ATF inspection."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Liability",
      "Variable Name": "liability",
      "Brief Description of Provision": "Dealers are liable for damages resulting from illegal gun sales",
      "Detailed Description of Provision": "Dealers are held liable for damages caused by a gun that they knowingly sold to a person who is either prohibited from purchasing a firearm or who intends to use that firearm illegally."
    },
    {
      "Category Code": 1,
      "Category": "Dealer regulations",
      "Sub-Category": "Junk guns",
      "Variable Name": "junkgun",
      "Brief Description of Provision": "Ban on junk guns (sometimes called \"Saturday night specials\")",
      "Detailed Description of Provision": "The law prohibits the sale of handguns that fail to meet one or more of the following requirements: (1) Passes drop testing and firing testing; (2) Passes a melting point test; (3) Possesses specific handgun safety features; (4) Appears on a list of approved handguns. This may or may not apply to private sellers."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Waiting period",
      "Variable Name": "waiting",
      "Brief Description of Provision": "Waiting period is required on all firearm purchases from dealers",
      "Detailed Description of Provision": "There is a mandatory minimum waiting period for purchase of any firearm from a dealer. No exemption for concealed carry or purchase permit holders."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Waiting period",
      "Variable Name": "waitingh",
      "Brief Description of Provision": "Waiting period is required on all handgun purchases from dealers",
      "Detailed Description of Provision": "There is a mandatory minimum waiting period for purchase of a handgun (or handguns and assault weapons) from a dealer. No exemption for concealed carry or purchase permit holders."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Permitting",
      "Variable Name": "permit",
      "Brief Description of Provision": "A license or permit is required to purchase all firearms",
      "Detailed Description of Provision": "All firearms may only be sold to and possessed by individuals with a valid license or permit to possess or carry firearms. This may or may not include requiring a firearm safety certificate and must apply to both licensed dealers and private sellers."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Permitting",
      "Variable Name": "permith",
      "Brief Description of Provision": "A license or permit is required to purchase handguns",
      "Detailed Description of Provision": "Handguns may only be sold to and possessed by individuals with a valid license or permit to possess or carry handguns. This may or may not include requiring a firearm safety certificate and must apply to both licensed dealers and private sellers."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Permitting",
      "Variable Name": "permitlaw",
      "Brief Description of Provision": "Permit process involves law enforcement",
      "Detailed Description of Provision": "Individuals must obtain a permit in order to purchase a firearm through a permit approval process that includes law enforcement personnel. This may not apply to the purchase of long guns."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Fingerprinting",
      "Variable Name": "fingerprint",
      "Brief Description of Provision": "Buyers must be fingerprinted at point of purchase",
      "Detailed Description of Provision": "All firearm purchasers must have their fingerprints taken either at the point of purchase or during their permit/license application. This may not apply to the purchase of long guns and may exclude purchases from private sellers."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Safety training",
      "Variable Name": "training",
      "Brief Description of Provision": "Safety training or testing required prior to issuing a firearm license or permit",
      "Detailed Description of Provision": "Individuals must take part in safety training or testing in order to purchase a firearm, either at the point of purchase or as part of obtaining a firearm permit/license. This may not apply to the purchase of long guns."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Registration",
      "Variable Name": "registration",
      "Brief Description of Provision": "Gun owners must register their firearms with the state",
      "Detailed Description of Provision": "Individuals must register all firearms with the state, including the manufacturer, make, model, and serial number. Registration records must be maintained permanently or indefinitely."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Registration",
      "Variable Name": "registrationh",
      "Brief Description of Provision": "Gun owners must register their handguns with the state",
      "Detailed Description of Provision": "Individuals must register their handguns with the state, including the manufacturer, make, model, and serial number. Registration records must be maintained permanently or indefinitely."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Registration",
      "Variable Name": "defactoreg",
      "Brief Description of Provision": "De facto registration of firearms is in place because of a recordkeeping requirement for all gun sales",
      "Detailed Description of Provision": "All purchased firearms are registered with the state because of a requirement that all gun sales involve the permanent or indefinite retention of a record including the manufacturer, make, model, and serial number of the firearm; or, there is registration of all firearms."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Registration",
      "Variable Name": "defactoregh",
      "Brief Description of Provision": "De facto registration of handguns is in place because of a recordkeeping requirement for all handgun sales",
      "Detailed Description of Provision": "All purchased handguns are registered with the state because of a requirement that all gun sales involve the permanent or indefinite retention of a record including the manufacturer, make, model, and serial number of the firearm; or, there is registration of all handguns."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "age21handgunsale",
      "Brief Description of Provision": "Purchase of handguns from licensed dealers and private sellers restricted to age 21 and older",
      "Detailed Description of Provision": "You must be 21 to purchase a handgun, regardless of whether it is from a licensed dealer or private seller. No exemption for parental consent."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "age18longgunsale",
      "Brief Description of Provision": "Purchase of long guns from licensed dealers and private sellers restricted to age 18 and older",
      "Detailed Description of Provision": "You must be 18 to purchase a long gun, regardless of whether it is from a licensed dealer or private seller. No exemption for parental consent."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "age21longgunsaled",
      "Brief Description of Provision": "Purchase of long guns from licensed dealers restricted to age 21 and older",
      "Detailed Description of Provision": "You must be 21 to purchase a long gun from licensed dealers. May or may not apply to purchase from private sellers. No exemption for parental consent."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "age21longgunsale",
      "Brief Description of Provision": "Purchase of long guns from licensed dealers and private sellers restricted to age 21 and older",
      "Detailed Description of Provision": "You must be 21 to purchase a long gun, regardless of whether it is from a licensed dealer or private seller. No exemption for parental consent."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Theft reporting",
      "Variable Name": "loststolen",
      "Brief Description of Provision": "Mandatory reporting of lost and stolen guns by firearm owners",
      "Detailed Description of Provision": "Firearm owners are required to report any and all loss or theft of their firearms."
    },
    {
      "Category Code": 2,
      "Category": "Buyer regulations",
      "Sub-Category": "Bulk purchase limit",
      "Variable Name": "onepermonth",
      "Brief Description of Provision": "Buyers can purchase no more than one handgun per month with no or limited exceptions",
      "Detailed Description of Provision": "Buyers can purchase no more than one handgun per month, even if they have a concealed carry permit. In order to bypass this restriction, the buyer must be able to demonstrate an extraordinary need for the additional handgun. This may or may not apply to purchases from private sellers."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Felony",
      "Variable Name": "felony",
      "Brief Description of Provision": "Firearm possession is prohibited for all people with a felony conviction",
      "Detailed Description of Provision": "Law prohibits firearm possession by all people who have been convicted of a felony."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Violent Misdemeanor",
      "Variable Name": "violent",
      "Brief Description of Provision": "Firearm possession is prohibited for people who have committed a violent misdemeanor punishable by less than one year of imprisonment",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have committed violent misdemeanors punishable by less than one year of imprisonment. Simple assault misdemeanors must be included. Does not count if there is an explicit exemption for crimes punishable by less than one year of imprisonment."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Violent Misdemeanor",
      "Variable Name": "violenth",
      "Brief Description of Provision": "Handgun possession is prohibited for people who have committed a violent misdemeanor punishable by less than one year of imprisonment",
      "Detailed Description of Provision": "Law prohibits handgun possession by people who have committed violent misdemeanors punishable by less than one year of imprisonment. Simple assault misdemeanors must be included. Does not count if there is an explicit exemption for crimes punishable by less than one year of imprisonment."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Violent Misdemeanor",
      "Variable Name": "violentpartial",
      "Brief Description of Provision": "Firearm possession is prohibited for people who have committed a violent misdemeanor punishable by more than one year of imprisonment",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have committed violent misdemeanors punishable by more than one year of imprisonment."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Mental Health",
      "Variable Name": "invcommitment",
      "Brief Description of Provision": "Firearm possession is prohibited for people who have been involuntarily committed to an inpatient facility",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have been involuntarily committed for inpatient mental health treatment."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Mental Health",
      "Variable Name": "invoutpatient",
      "Brief Description of Provision": "Firearm possession is prohibited for people who have been involuntarily committed to an outpatient facility",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have been involuntarily committed for outpatient mental health treatment."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Mental Health",
      "Variable Name": "danger",
      "Brief Description of Provision": "Firearm possession is prohibited if person is deemed by court to be a danger to oneself or others",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have been deemed by a court to be a danger to themselves or others."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Drugs",
      "Variable Name": "drugmisdemeanor",
      "Brief Description of Provision": "Firearm possession is prohibited for people with a drug misdemeanor conviction",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have been convicted of a drug-related misdemeanor."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Alcohol",
      "Variable Name": "alctreatment",
      "Brief Description of Provision": "Firearm possession is prohibited for some people with alcohol-related problems",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have received treatment for alcohol-related problems that exceeds a state-defined threshold."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Alcohol",
      "Variable Name": "alcoholism",
      "Brief Description of Provision": "Firearm possession is prohibited for some people with alcoholism",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have received treatment for alcoholism that exceeds a state-defined threshold."
    },
    {
      "Category Code": 3,
      "Category": "Prohibitions for high-risk gun possession",
      "Sub-Category": "Relinquishment of weapons",
      "Variable Name": "relinquishment",
      "Brief Description of Provision": "People are required to relinquish their firearms after they become prohibited from possessing them",
      "Detailed Description of Provision": "Law requires that upon becoming prohibited from possessing a firearm, a person must relinquish all firearms in their possession. This must be a broad provision that covers most, if not all, categories of prohibited people. For example, if the law only applies to mental health prohibitors, it is not considered to satisfy the requirements for having this provision. The law must explicitly require the relinquishment of weapons, not merely prohibit the possession of weapons."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Universal background checks",
      "Variable Name": "universal",
      "Brief Description of Provision": "Universal background checks required at point of purchase for all firearms",
      "Detailed Description of Provision": "Both licensed dealers and private sellers must conduct background checks at point of purchase for all firearms. This may or may not include exemptions for buyers who have already undergone a background check for a concealed carry permit or other licensing requirements. Background checks must be explicitly required."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Universal background checks",
      "Variable Name": "universalh",
      "Brief Description of Provision": "Universal background check required at point of purchase for handguns",
      "Detailed Description of Provision": "Both licensed dealers and private sellers must conduct background checks at point of purchase for handguns. This may or may not include exemptions for buyers who have already undergone a background check for a concealed carry permit or other licensing requirements. Background checks must be explicitly required."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Gun shows",
      "Variable Name": "gunshow",
      "Brief Description of Provision": "Background checks required for all gun show firearm sales at point of purchase",
      "Detailed Description of Provision": "Law requires background checks for all firearm sales at gun shows at point of purchase. This closes the gun show loophole for all firearm sales. Background checks must be explicitly required."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Gun shows",
      "Variable Name": "gunshowh",
      "Brief Description of Provision": "Background checks required for gun show handgun sales at point of purchase",
      "Detailed Description of Provision": "Law requires background checks for handgun sales at gun shows at point of purchase. This closes the gun show loophole for handgun sales. Background checks must be explicitly required."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Background checks through permits",
      "Variable Name": "universalpermit",
      "Brief Description of Provision": "Background checks conducted through permit requirement for all firearm sales (or universal background checks)",
      "Detailed Description of Provision": "Individuals must undergo a background check to purchase any type of firearm, either at the point of purchase or through a license/permit application. This may or may not include exemptions for buyers who have already undergone a background check for a concealed carry permit or other licensing requirements. Background checks must be explicitly required."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Background checks through permits",
      "Variable Name": "universalpermith",
      "Brief Description of Provision": "Background checks conducted through permit requirement for all handgun sales (or universal background checks)",
      "Detailed Description of Provision": "Individuals must undergo a background check to purchase handguns, either at the point of purchase or through a license/permit application. This may or may not include exemptions for buyers who have already undergone a background check for a concealed carry permit or other licensing requirements. Background checks must be explicitly required."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Background check records",
      "Variable Name": "backgroundpurge",
      "Brief Description of Provision": "State can retain background check records for at least 60 days",
      "Detailed Description of Provision": "The law does NOT require that the state purge its background check records within 60 days of the firearm purchase or permit application. This may apply to background checks for handgun possession, long gun possession, or both."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Background checks time limit",
      "Variable Name": "threedaylimit",
      "Brief Description of Provision": "Background checks for gun sales or permits have more than a three day period in which they can be completed",
      "Detailed Description of Provision": "Law requires that individuals undergo a background check when purchasing at least some weapons from private sellers, and extends the period in which a background check can be completed beyond the federal three day limit. May or may not apply to the purchase of handguns and may or may not extend the period beyond three days for licensed dealers."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Background checks - mental health records",
      "Variable Name": "mentalhealth",
      "Brief Description of Provision": "Required background checks include an explicit requirement for search of state mental health records",
      "Detailed Description of Provision": "Background checks for private sales are required for at least some weapons and there is an explicit requirement for search of mental health records. This may or may not apply to sales by licensed dealers."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Background checks - state records",
      "Variable Name": "statechecks",
      "Brief Description of Provision": "State conducts separate background checks, beyond the federal NICS check, for all firearms",
      "Detailed Description of Provision": "Law requires state to conduct its own background check, not just the NICS check, for all firearm sales or permit applications. If at the point of purchase, must apply to gun show sellers and licensed dealers and may also apply to all other private sellers; if at the point of permit application, must apply to all licensed dealers and private sellers."
    },
    {
      "Category Code": 4,
      "Category": "Background checks",
      "Sub-Category": "Background checks - state records",
      "Variable Name": "statechecksh",
      "Brief Description of Provision": "State conducts separate background checks, beyond the federal NICS check, for handguns",
      "Detailed Description of Provision": "Law requires state to conduct its own background check, not just the NICS check, for handgun sales or permit applications. If at the point of purchase, must apply to gun show sellers and licensed dealers and may also apply to all other private sellers; if at the point of permit application, must apply to all licensed dealers and private sellers."
    },
    {
      "Category Code": 5,
      "Category": "Ammunition regulations",
      "Sub-Category": "Licensing",
      "Variable Name": "ammlicense",
      "Brief Description of Provision": "Vendor license required to sell ammunition",
      "Detailed Description of Provision": "Law requires that ammunition vendors be licensed. This must apply to all vendors of handgun ammunition; it may or may not apply to vendors of long gun ammunition."
    },
    {
      "Category Code": 5,
      "Category": "Ammunition regulations",
      "Sub-Category": "Recordkeeping",
      "Variable Name": "ammrecords",
      "Brief Description of Provision": "Records of ammunition sales must be retained",
      "Detailed Description of Provision": "Vendors must retain ammunition sales records. This must apply to sales records of all handgun ammunition; it may or may not apply to sales records of long gun ammunition."
    },
    {
      "Category Code": 5,
      "Category": "Ammunition regulations",
      "Sub-Category": "Permitting",
      "Variable Name": "ammpermit",
      "Brief Description of Provision": "Permit required to purchase ammunition",
      "Detailed Description of Provision": "All firearm ammunition may only be sold to individuals who have a valid license or permit for that ammunition. This may or may not include purchase of ammunition from private sellers."
    },
    {
      "Category Code": 5,
      "Category": "Ammunition regulations",
      "Sub-Category": "Prohibitors",
      "Variable Name": "ammrestrict",
      "Brief Description of Provision": "All of the state’s high-risk gun possession prohibitions also apply to ammunition possession",
      "Detailed Description of Provision": "All restrictions that hold for purchase of firearms also hold for purchase of ammunition. Application to restrictions on handguns only or long guns only is OK."
    },
    {
      "Category Code": 5,
      "Category": "Ammunition regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "amm18",
      "Brief Description of Provision": "Purchase of any type of ammunition restricted to age 18 and older",
      "Detailed Description of Provision": "Individuals must be age 18 or older to purchase ammunition from any type of dealer. No exemption for parental consent."
    },
    {
      "Category Code": 5,
      "Category": "Ammunition regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "amm21h",
      "Brief Description of Provision": "Purchase of handgun ammunition restricted to age 21 and older",
      "Detailed Description of Provision": "Individuals must be age 21 or older to purchase handgun ammunition from any type of dealer. No exemption for parental consent."
    },
    {
      "Category Code": 5,
      "Category": "Ammunition regulations",
      "Sub-Category": "Background checks",
      "Variable Name": "ammbackground",
      "Brief Description of Provision": "Background checks required for ammunition purchase",
      "Detailed Description of Provision": "Purchasers of any type of ammunition must undergo a background check, either at the point of purchase or when obtaining a permit for ammunition purchase."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "age21handgunpossess",
      "Brief Description of Provision": "No possession of handguns until age 21",
      "Detailed Description of Provision": "You must be 21 to possess a handgun. No exemption for parental consent. Exclusions for adult-supervised hunting, sporting, or training activities are OK. Exception for possession on private premises NOT OK unless minor required to be under adult supervision."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "age18longgunpossess",
      "Brief Description of Provision": "No possession of long guns until age 18",
      "Detailed Description of Provision": "You must be 18 to  possess a long gun. No exemption for parental consent. Exclusions for adult-supervised hunting, sporting, or training activities are OK. Exception for possession on private premises NOT OK unless minor required to be under adult supervision."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Age restrictions",
      "Variable Name": "age21longgunpossess",
      "Brief Description of Provision": "No possession of long guns until age 21",
      "Detailed Description of Provision": "You must be 21 to possess a long gun. No exemption for parental consent. Exclusions for adult-supervised hunting, sporting, or training activities are OK. Exception for possession on private premises NOT OK unless minor required to be under adult supervision."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Gun violence restraining orders",
      "Variable Name": "gvro",
      "Brief Description of Provision": "Family members or law enforcement officers can confiscate firearms from any person who is deemed by a judge to represent a threat to themselves or others",
      "Detailed Description of Provision": "Law must allow both family members and law officers to initiate an immediate process to confiscate firearms from individuals deemed by a judge to represent a threat to themselves or others. Law must require the surrender and confiscation of firearms, including authorization for a search and confiscation of the individual's residence. Must allow for temporary removal of weapons pending a court hearing."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Gun violence restraining orders",
      "Variable Name": "gvrolawenforcement",
      "Brief Description of Provision": "Law enforcement officers can confiscate firearms from any person who is deemed by a judge to represent a threat to themselves or others",
      "Detailed Description of Provision": "Law allows law enforcement officers (but not necessarily family members) to initiate an immediate process to confiscate firearms from individuals deemed by a judge to represent a threat to themselves or others. Law must require the surrender and confiscation of firearms, including authorization for a search and confiscation of the individual's residence. Must allow for temporary removal of weapons pending a court hearing."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Campus carry",
      "Variable Name": "college",
      "Brief Description of Provision": "No gun carrying allowed on college campuses except for concealed weapon permittees",
      "Detailed Description of Provision": "Law bans gun carrying on college campuses, but concealed carry weapons may be allowed. No exemption for authorized faculty or staff, except security staff. Must include both public and private colleges."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Campus carry",
      "Variable Name": "collegeconcealed",
      "Brief Description of Provision": "No gun carrying on college campuses, including concealed weapons permittees",
      "Detailed Description of Provision": "Law bans gun carrying on college campuses, including concealed carry weapons. No exemption for authorized faculty or staff, except security staff. Must include both public and private colleges."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "School zones",
      "Variable Name": "elementary",
      "Brief Description of Provision": "No gun carrying on elementary school property, including concealed weapons permittees",
      "Detailed Description of Provision": "Law bans gun carrying in elementary schools and on their grounds, even for persons with a concealed carry permit. No exemption for authorized faculty or staff, except security staff (including school resource officers). Must include both public and private schools."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Open carry",
      "Variable Name": "opencarryh",
      "Brief Description of Provision": "No open carry of handguns is allowed in public places",
      "Detailed Description of Provision": "Law bans the open carry of handguns in all public places, even with a concealed carry or handgun carry permit. Exemptions for open carry in the home, on personal property, in vehicles, and for hunting, target shooting, and training are permissible."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Open carry",
      "Variable Name": "opencarryl",
      "Brief Description of Provision": "No open carry of long guns is allowed in public places",
      "Detailed Description of Provision": "Law bans the open carry of long guns in all public places, even with a concealed carry or other permit. Exemptions for open carry in the home, on personal property, in vehicles, and for hunting, target shooting, and training are permissible."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Open carry",
      "Variable Name": "opencarrypermith",
      "Brief Description of Provision": "No open carry of handguns is allowed in public places unless the person has a concealed carry or handgun carry permit",
      "Detailed Description of Provision": "Law bans the open carry of handguns in all public places without a permit. Exemptions for open carry in the home, on personal property, in vehicles, and for hunting, target shooting, and training are permissible."
    },
    {
      "Category Code": 6,
      "Category": "Possession regulations",
      "Sub-Category": "Open carry",
      "Variable Name": "opencarrypermitl",
      "Brief Description of Provision": "No open carry of long guns is allowed in public places unless the person has a permit",
      "Detailed Description of Provision": "Law bans the open carry of long guns in all public places without a permit. Exemptions for open carry in the home, on personal property, in vehicles, and for hunting, target shooting, and training are permissible."
    },
    {
      "Category Code": 7,
      "Category": "Concealed carry permitting",
      "Sub-Category": "Permitting",
      "Variable Name": "permitconcealed",
      "Brief Description of Provision": "Permit required to carry concealed weapons",
      "Detailed Description of Provision": "Law requires a permit in order for an individual to carry a concealed weapon, or the law bans all concealed weapons."
    },
    {
      "Category Code": 7,
      "Category": "Concealed carry permitting",
      "Sub-Category": "Permitting",
      "Variable Name": "mayissue",
      "Brief Description of Provision": "May issue\" state",
      "Detailed Description of Provision": "Law provides authorities with discretion in deciding whether to grant a concealed carry permit, or the law bans all concealed weapons."
    },
    {
      "Category Code": 7,
      "Category": "Concealed carry permitting",
      "Sub-Category": "Permitting",
      "Variable Name": "showing",
      "Brief Description of Provision": "Applicants are required to make a heightened showing to obtain a concealed carry permit",
      "Detailed Description of Provision": "Law prohibits applicants from being approved for concealed carry permits unless they make a heightened showing, such as demonstrating a particular need to possess a concealed weapon, or law bans all concealed weapons."
    },
    {
      "Category Code": 7,
      "Category": "Concealed carry permitting",
      "Sub-Category": "Permitting",
      "Variable Name": "ccrevoke",
      "Brief Description of Provision": "Authorities are required to revoke concealed carry permits under certain circumstances",
      "Detailed Description of Provision": "Law requires authorities to revoke a concealed carry permit under certain circumstances, or law bans all concealed weapons."
    },
    {
      "Category Code": 7,
      "Category": "Concealed carry permitting",
      "Sub-Category": "Background checks",
      "Variable Name": "ccbackground",
      "Brief Description of Provision": "Concealed carry permit process requires a background check",
      "Detailed Description of Provision": "Law requires that individuals undergo a background check when applying for a concealed carry permit, or law bans all concealed weapons."
    },
    {
      "Category Code": 7,
      "Category": "Concealed carry permitting",
      "Sub-Category": "Background checks",
      "Variable Name": "ccbackgroundnics",
      "Brief Description of Provision": "Background check process for a concealed carry permit explicitly requires a check of the NICS database",
      "Detailed Description of Provision": "Law explicitly requires that individuals applying for a concealed carry permit must undergo a background check process that includes a check of the NICS database."
    },
    {
      "Category Code": 7,
      "Category": "Concealed carry permitting",
      "Sub-Category": "Background checks",
      "Variable Name": "ccrenewbackground",
      "Brief Description of Provision": "Concealed carry permit renewal requires a new background check",
      "Detailed Description of Provision": "Law requires individuals to undergo a background check in order to renew a concealed carry permit, or law bans all concealed weapons."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Assault weapons ban",
      "Variable Name": "assault",
      "Brief Description of Provision": "Ban on sale of assault weapons beyond just assault pistols",
      "Detailed Description of Provision": "Law bans the sale of both assault pistols and other assault weapons."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Assault weapons ban",
      "Variable Name": "onefeature",
      "Brief Description of Provision": "Ban on sale of assault weapons using a one-feature definition",
      "Detailed Description of Provision": "Law bans the sale of assault weapons, using a generic definition of assault weapons based on only one feature."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Assault weapons ban",
      "Variable Name": "assaultlist",
      "Brief Description of Provision": "Ban on sale of assault weapons which includes a list of banned weapons",
      "Detailed Description of Provision": "Law bans the sale of assault weapons and includes in this ban a list of some of the banned weapons."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Assault weapons ban",
      "Variable Name": "assaultregister",
      "Brief Description of Provision": "Grandfathered weapons must be registered",
      "Detailed Description of Provision": "Law bans the sale of assault weapons. Individuals who already own assault weapons included in this ban must register their weapons."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Assault weapons ban",
      "Variable Name": "assaulttransfer",
      "Brief Description of Provision": "Transfer of grandfathered weapons is prohibited",
      "Detailed Description of Provision": "Law bans the sale of assault weapons. Individuals who already own assault weapons included in this ban are prohibited from selling or transferring their weapons to others."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Large capacity magazine ban",
      "Variable Name": "magazine",
      "Brief Description of Provision": "Ban on sale large capacity magazines beyond just ammunition for pistols",
      "Detailed Description of Provision": "Law bans the sale of both assault pistol ammunition and other large capacity magazines."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Large capacity magazine ban",
      "Variable Name": "tenroundlimit",
      "Brief Description of Provision": "No magazines with a capacity of more than 10 rounds of ammunition may be sold",
      "Detailed Description of Provision": "Law bans the sale of all magazines with a capacity of more than 10 rounds of ammunition."
    },
    {
      "Category Code": 8,
      "Category": "Assault weapons and large-capacity magazines",
      "Sub-Category": "Large capacity magazine ban",
      "Variable Name": "magazinepreowned",
      "Brief Description of Provision": "Possession of pre-owned large capacity magazines is prohibited",
      "Detailed Description of Provision": "No purchase or possession of large capacity magazines is allowed. Individuals who already own large capacity magazines included in this ban may be required to turn them in."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Safety locks",
      "Variable Name": "lockd",
      "Brief Description of Provision": "Safety lock required for handguns sold through licensed dealers",
      "Detailed Description of Provision": "All handguns must be sold with either an integrated or external lock. This applies to licensed dealers and may or may not apply to private sellers."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Safety locks",
      "Variable Name": "lockp",
      "Brief Description of Provision": "Safety lock required for handguns sold through all dealers",
      "Detailed Description of Provision": "All handguns must be sold with either an integrated or external lock. This applies to all dealers."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Safety locks",
      "Variable Name": "lockstandards",
      "Brief Description of Provision": "Safety lock is required for handguns and must be approved by state standards",
      "Detailed Description of Provision": "All handguns must be sold with either an integrated or external lock, which must meet state-specified standards or be otherwise approved by the state."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "locked",
      "Brief Description of Provision": "All firearms in a household must be stored securely (locked away) at all times",
      "Detailed Description of Provision": "All firearms in a household must be stored securely (locked away) at all times."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "capliability",
      "Brief Description of Provision": "Criminal liability for negligent storage of guns, regardless of whether child gains access",
      "Detailed Description of Provision": "Owner of gun is criminally liable if a gun is not stored properly, regardless of whether a child actually gains access to the gun."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "capaccess",
      "Brief Description of Provision": "Criminal liability for negligent storage of guns if child gains access",
      "Detailed Description of Provision": "Owner of gun is criminally liable if a gun is not stored properly and a child gains access to the gun."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "capuses",
      "Brief Description of Provision": "Criminal liability for negligent storage of guns if child uses or carries the gun",
      "Detailed Description of Provision": "Owner of gun is criminally liable if a gun is not stored properly and the child uses or carries the gun."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "capunloaded",
      "Brief Description of Provision": "Criminal liability for negligent storage applies regardless of whether gun is loaded or unloaded",
      "Detailed Description of Provision": "Owner of gun is criminally liable regardless of whether the stored gun is loaded."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "cap18",
      "Brief Description of Provision": "Criminal liability for negligent storage applies to access by children less than 18 years old",
      "Detailed Description of Provision": "Owner of gun is criminally liable if child under age 18 has access to the gun."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "cap16",
      "Brief Description of Provision": "Criminal liability for negligent storage applies to access by children less than 16 years old",
      "Detailed Description of Provision": "Owner of gun is criminally liable if child under age 16 has access to the gun."
    },
    {
      "Category Code": 9,
      "Category": "Child access prevention",
      "Sub-Category": "Storage",
      "Variable Name": "cap14",
      "Brief Description of Provision": "Criminal liability for negligent storage applies to access by children less than 14 years old",
      "Detailed Description of Provision": "Owner of gun is criminally liable if child under age 14 has access to the gun."
    },
    {
      "Category Code": 10,
      "Category": "Gun trafficking",
      "Sub-Category": "Gun trafficking",
      "Variable Name": "traffickingbackground",
      "Brief Description of Provision": "No person may purchase a firearm with the intent to re-sell without the buyer going through a background check or having already gone through a background check",
      "Detailed Description of Provision": "The law prohibits the trafficking of firearms; that is, the purchase of firearm with the intent to re-sell the firearm, but without going through a background check process (or without the buyer already having gone through a background check to obtain a firearm license). An exception for transfer to relatives is acceptable."
    },
    {
      "Category Code": 10,
      "Category": "Gun trafficking",
      "Sub-Category": "Gun trafficking",
      "Variable Name": "traffickingprohibited",
      "Brief Description of Provision": "No person may purchase a firearm with the intent to re-sell to a person who is prohibited from buying or possessing a firearm",
      "Detailed Description of Provision": "The law prohibits the purchase of a firearm with the intent to re-sell to a prohibited person. It must apply to all firearms. We make no distinction between whether the trafficker (original purchaser) must actually know that the buyer is prohibited, must have reason to believe that the buyer is prohibited, must recklessly sell the firearm, or must intend to sell to a buyer who is prohibited, regardless of knowledge of the buyer's status. An exemption for sale to relatives is acceptable."
    },
    {
      "Category Code": 10,
      "Category": "Gun trafficking",
      "Sub-Category": "Gun trafficking",
      "Variable Name": "traffickingprohibitedh",
      "Brief Description of Provision": "No person may purchase a handgun with the intent to re-sell to a person who is prohibited from buying or possessing a firearm",
      "Detailed Description of Provision": "The law prohibits the purchase of a handgun with the intent to re-sell to a prohibited person. We make no distinction between whether the trafficker (original purchaser) must actually know that the buyer is prohibited, must have reason to believe that the buyer is prohibited, must recklessly sell the firearm, or must intend to sell to a buyer who is prohibited, regardless of knowledge of the buyer's status. An exemption for sale to relatives is acceptable."
    },
    {
      "Category Code": 10,
      "Category": "Gun trafficking",
      "Sub-Category": "Straw purchase",
      "Variable Name": "strawpurchase",
      "Brief Description of Provision": "No person may purchase a firearm on behalf of another person",
      "Detailed Description of Provision": "The law prohibits a straw purchase of any firearm; that is, no person may purchase a firearm on behalf of another person. An exemption for transfer to relatives is acceptable."
    },
    {
      "Category Code": 10,
      "Category": "Gun trafficking",
      "Sub-Category": "Straw purchase",
      "Variable Name": "strawpurchaseh",
      "Brief Description of Provision": "No person may purchase a handgun on behalf of another person",
      "Detailed Description of Provision": "The law prohibits a straw purchase of handguns; that is, no person may purchase a handgun on behalf of another person. An exemption for transfer to relatives is acceptable."
    },
    {
      "Category Code": 10,
      "Category": "Gun trafficking",
      "Sub-Category": "Crime gun identification",
      "Variable Name": "microstamp",
      "Brief Description of Provision": "All handguns sold must have either ballistic fingerprinting or microstamping so that they can be identified if used in a crime",
      "Detailed Description of Provision": "Either ballistic fingerprinting or microstamping is required for all new handguns sold in the state. For ballistic fingerprinting, it must apply to all handguns. For microstamping, it must apply at least to semi-automatic pistols."
    },
    {
      "Category Code": 10,
      "Category": "Gun trafficking",
      "Sub-Category": "Personalized gun technology",
      "Variable Name": "personalized",
      "Brief Description of Provision": "State has a law that requires review of personalized gun technology",
      "Detailed Description of Provision": "Law has initiated a process to review implementation of a policy that requires new handguns to have a mechanism so that only the authorized user can operate the gun."
    },
    {
      "Category Code": 11,
      "Category": "Stand your ground",
      "Sub-Category": "Stand your ground",
      "Variable Name": "nosyg",
      "Brief Description of Provision": "No stand your ground law",
      "Detailed Description of Provision": "Use of deadly force is not allowed to be a first resort in public. This is sometimes referred to as a \"stand your ground\" law. There is a duty to retreat. Does not count as shoot first law if it only applies when person is in a vehicle."
    },
    {
      "Category Code": 12,
      "Category": "Preemption",
      "Sub-Category": "Preemption",
      "Variable Name": "preemption",
      "Brief Description of Provision": "State law does not preempt local regulation of firearms in any way",
      "Detailed Description of Provision": "There is NO state law which preempts (prevents) local governments from regulating firearms. Complete or partial preemption is considered as preemption under this category. To be preemption, must be specific to firearm regulation. Constitutional preemption is considered preemption."
    },
    {
      "Category Code": 12,
      "Category": "Preemption",
      "Sub-Category": "Preemption",
      "Variable Name": "preemptionnarrow",
      "Brief Description of Provision": "Any state law that preempts local regulation of firearms is narrow in its scope (i.e., in one area of regulation)",
      "Detailed Description of Provision": "There is no state preemption beyond the preemption of one area of regulation, such as firearm registration or concealed carry permitting."
    },
    {
      "Category Code": 12,
      "Category": "Preemption",
      "Sub-Category": "Preemption",
      "Variable Name": "preemptionbroad",
      "Brief Description of Provision": "State law does not completely preempt local regulation of firearms",
      "Detailed Description of Provision": "There is no preemption, narrow preemption, or broad state preemption across multiple areas of regulation, but it is not complete."
    },
    {
      "Category Code": 13,
      "Category": "Immunity",
      "Sub-Category": "Immunity",
      "Variable Name": "immunity",
      "Brief Description of Provision": "No law provides blanket immunity to gun manufacturers or prohibits state or local lawsuits against gun manufacturers",
      "Detailed Description of Provision": "The state does not have a law that provides immunity to gun manufacturers for damages caused by their products or which prohibits the state or local government from filing lawsuits against gun manufacturer. Protections for gun dealers do not count."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Misdemeanor crimes",
      "Variable Name": "mcdv",
      "Brief Description of Provision": "People convicted of a misdemeanor crime of domestic violence against a spouse, ex-spouse, or cohabitating partner are prohibited from possessing firearms",
      "Detailed Description of Provision": "Law prohibits firearm possession by people convicted of a misdemeanor crime of domestic violence if the victim is a spouse, ex-spouse, or cohabitating partner. F10 The law must apply beyond family members, unless family members are defined to include ex-spouses and cohabitating partners."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Misdemeanor crimes",
      "Variable Name": "mcdvdating",
      "Brief Description of Provision": "All people convicted of a misdemeanor crime of domestic violence are prohibited from possessing firearms",
      "Detailed Description of Provision": "Law prohibits firearm possession by people convicted of a misdemeanor crime of domestic violence regardless of the relationship to the victim."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Misdemeanor crimes",
      "Variable Name": "mcdvsurrender",
      "Brief Description of Provision": "People convicted of a misdemeanor crime of domestic violence against a spouse, ex-spouse, or cohabitating partner are required to surrender their firearms",
      "Detailed Description of Provision": "Law prohibits firearm possession by people convicted of a misdemeanor crime of domestic violence and also requires them to turn in the firearms they already have."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Misdemeanor crimes",
      "Variable Name": "mcdvsurrendernoconditions",
      "Brief Description of Provision": "People convicted of a misdemeanor crime of domestic violence against a spouse, ex-spouse, or cohabitating partner are required to surrender their firearms with no exceptions",
      "Detailed Description of Provision": "There are no additional conditions on the requirement that MCDV offenders turn in their firearms. No additional finding is necessary."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Misdemeanor crimes",
      "Variable Name": "mcdvsurrenderdating",
      "Brief Description of Provision": "The surrender provisions apply if the defendant is a dating partner of the victim",
      "Detailed Description of Provision": "The requirement that MCDV offenders turn in their firearms applies if the victim is a dating partner of the offender."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Misdemeanor crimes",
      "Variable Name": "mcdvremovalallowed",
      "Brief Description of Provision": "State law allows law enforcement to remove firearms from MCDV offenders",
      "Detailed Description of Provision": "Law enforcement officials are authorized to remove firearms from MCDV offenders."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Misdemeanor crimes",
      "Variable Name": "mcdvremovalrequired",
      "Brief Description of Provision": "State law requires law enforcement officers to remove firearms from MCDV offenders",
      "Detailed Description of Provision": "Law enforcement officials are required to remove firearms from MCDV offenders."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Firearm removal",
      "Variable Name": "incidentremoval",
      "Brief Description of Provision": "State law requires law enforcement to remove firearms from the scene of a domestic violence incident",
      "Detailed Description of Provision": "Law enforcement officials are required to remove at least some firearms from the scene of a domestic violence incident."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Firearm removal",
      "Variable Name": "incidentall",
      "Brief Description of Provision": "All firearms must be removed from the scene of a domestic violence incident",
      "Detailed Description of Provision": "Law enforcement officials must remove all firearms from the scene of a domestic violence incident. Firearms that can be removed cannot be restricted to only firearms used in the incident, firearms threatened in the incident, or firearms brandished in the incident."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "dvro",
      "Brief Description of Provision": "State law automatically prohibits domestic violence-related restraining order (DVRO) subjects from possessing firearms",
      "Detailed Description of Provision": "Subjects of a domestic-violence related restraining order (DVRO) are not allowed to possess firearms. The law must apply to possession, and not just purchase of firearms. Application to handguns only is acceptable. The law must apply beyond family members, unless family members are defined to include ex-spouses and cohabitating partners."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "dvrodating",
      "Brief Description of Provision": "DVROs are automatically prohibiting if the subject is a dating partner of the petitioner",
      "Detailed Description of Provision": "Subjects of a DVRO are not allowed to possess firearms and the prohibition applies if the subject is a dating partner of the petitioner."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "exparte",
      "Brief Description of Provision": "Ex parte (temporary) DVRO subjects are automatically prohibited from possessing firearms",
      "Detailed Description of Provision": "Subjects of a temporary (ex parte) restraining order are not allowed to possess firearms."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "expartedating",
      "Brief Description of Provision": "Ex parte DVROs are prohibiting if the petitioner is a dating partner of the DVRO subject",
      "Detailed Description of Provision": "The prohibition on firearm possession by subjects of an ex parte restraining order applies if the petitioner is a dating partner of the DVRO subject."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "dvrosurrender",
      "Brief Description of Provision": "State law requires DVRO subjects to surrender their firearms",
      "Detailed Description of Provision": "Subjects of a DVRO are not allowed to possess firearms and are required to surrender the firearms that they already possess."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "dvrosurrendernoconditions",
      "Brief Description of Provision": "No additional finding is required before the firearm surrender provisions apply",
      "Detailed Description of Provision": "There are no additional conditions on the requirement that DVRO subjects turn in their firearms. No additional finding is necessary."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "dvrosurrenderdating",
      "Brief Description of Provision": "The surrender provisions apply if the subject is a dating partner of the petitioner",
      "Detailed Description of Provision": "The requirement that DVRO subjects turn in their firearms applies if the subject is a dating partner of the petitioner."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "expartesurrender",
      "Brief Description of Provision": "State law requires ex parte DVRO subjects to surrender their firearms",
      "Detailed Description of Provision": "Law requires subjects of an ex parte DVRO to turn in their firearms."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "expartesurrendernoconditions",
      "Brief Description of Provision": "No additional finding is required before the ex parte DVRO firearm surrender provisions apply",
      "Detailed Description of Provision": "Law requires subjects of an ex parte DVRO to turn in their firearms and there are no additional conditions on this requirement. No additional finding is necessary."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "expartesurrenderdating",
      "Brief Description of Provision": "The ex parte DVRO surrender provisions apply if the subject is a dating partner of the petitioner",
      "Detailed Description of Provision": "Law requires subjects of an ex parte DVRO to turn in their firearms and this requirement applies if the subject is a dating partner of the petitioner."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Restraining order",
      "Variable Name": "dvroremoval",
      "Brief Description of Provision": "Law enforcement officials are required to remove firearms from people subject to a domestic violence-related restraining order",
      "Detailed Description of Provision": "Law requires law enforcement officials to remove firearms from people subject to a domestic violence-related restraining order."
    },
    {
      "Category Code": 14,
      "Category": "Domestic violence",
      "Sub-Category": "Stalking",
      "Variable Name": "stalking",
      "Brief Description of Provision": "A stalking conviction is prohibitive for firearm possession",
      "Detailed Description of Provision": "Law prohibits firearm possession by people who have been convicted of a stalking offense."
    }
  ]