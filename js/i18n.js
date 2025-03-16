const translations = {
    en: {
        nav: {
            home: "Back to Home",
            buyCatBeds: "Buy Cat Beds",
            privacy: "Privacy Policy",
            aboutUs: "About Us",
            contact: "Contact"
        },
        announcement: "🎉 Limited Time | Free Shipping on All Orders",
        hero: {
            title: "Create the Perfect Resting Space for Your Cat"
        },
        shop: {
            title: "Featured Cat Beds",
            subtitle: "Choose the Perfect Cozy Haven for Your Cat"
        },
        products: {
            title: "Featured Cat Beds",
            orderNow: "Order Now",
            features: {
                product1: {
                    0: "Multi-level Space",
                    1: "Sisal Posts",
                    2: "Climbable"
                },
                product2: {
                    0: "Breathable Cooling",
                    1: "Hammock Design",
                    2: "Easy Install"
                },
                product3: {
                    0: "Portable Design",
                    1: "Thickened Bottom for Warmth"
                },
                product4: {
                    0: "Multi-functional",
                    1: "Includes Scratching Board and Toy"
                },
                product5: {
                    0: "High Suspension",
                    1: "Unique Viewing Experience"
                },
                product6: {
                    0: "Heatable",
                    1: "Cute Shape"
                },
                product7: {
                    0: "Super Large",
                    1: "Multi-level Design"
                },
                product8: {
                    0: "Double Layer Warm Design",
                    1: "Easy Clean"
                },
                product9: {
                    0: "Large Window Design",
                    1: "No Tool Installation Required"
                },
                product10: {
                    0: "Sweet Donut Shape",
                    1: "Closed Design"
                }
            },
            details: {
                title: "Product Details",
                product1: {
                    name: "Feandrea Cat Castle",
                    description: "Let your cat enjoy a 'five-star climbing life'!",
                    features: "Multi-cat households: Multi-level structure prevents territory disputes.\nSmall apartment owners: Vertical space development, creates a cat 'CBD' in 1㎡.\nFurniture protection: 13 sisal posts for directed scratching, saves sofas and curtains."
                },
                product2: {
                    name: "Summer Cloud AC Room",
                    description: "Cat's 'summer resort'",
                    features: "Southern region users: Prevents cat paw heat anxiety, eliminates heatstroke risk.\nLong-haired cat owners: Summer lifesaver for Ragdolls, Maine Coons, etc.\nWindow view lovers: Hanging design + bird watching angle, fulfills cat's 'reality show' needs."
                },
                product3: {
                    name: "Dream Nest Circle",
                    description: "Unlock your cat's 'art of relaxation'!",
                    features: "Camping enthusiasts: Portable folding design, perfect for outdoor picnics.\nSenior cat parents: Low entrance + cushion design, caring for joint health.\nCleanliness-focused owners: Detachable lining, one-click washing without odor."
                },
                product4: {
                    name: "Stress Relief Scratch & Play House",
                    description: "Scratcher + Bed = Perfect Work-Play Balance!",
                    features: "Renting students: No drilling required, no wall damage when moving.\nNew cat owners: One-click assembly, thoughtful user guide.\nExtreme cold region users: Double-layer warmth, withstands severe cold."
                },
                product5: {
                    name: "Floating Cloud Island",
                    description: "Not just a hammock, it's your cat's 'Inception' experience!",
                    features: "Large cat owners: Reinforced weight bearing, suitable for Maine Coon and other large breeds.\nMulti-cat households: Multi-level space, prevents territory disputes.\nVertical space developers: Makes full use of wall height, saves floor space."
                },
                product6: {
                    name: "Paw-Shaped Warm Nest",
                    description: "Give your cat a 'five-star spa experience' on a paw pad!",
                    features: "Northern cold regions: Constant heating, warm through winter.\nSmall dogs/senior cats: Low entrance, protects joints.\nEasy-clean enthusiasts: Machine washable fabric, effortless maintenance."
                },
                product7: {
                    name: "Cat Skyscraper",
                    description: "Let your cat experience the joy of being a 'vertical conqueror'!",
                    features: "Suitable for active cats, multi-level design satisfies climbing needs. Perfect for cats under 12kg, combines rest, play, and viewing functions."
                },
                product8: {
                    name: "Winter Healing Pod",
                    description: "Let your pet sleep in a breathing cloud villa!",
                    features: "New cat owners: One-click assembly, thoughtful user guide.\nExtreme cold region users: Double-layer warmth, withstands severe cold.\nEasy-clean enthusiasts: Machine washable fabric, effortless maintenance."
                },
                product9: {
                    name: "Sunlight VIP Box",
                    description: "Give your cat a 360° panoramic view!",
                    features: "Bird-watching cats: Large viewing window, enjoy bird performances.\nRenters: Tool-free installation, leaves no marks.\nSunbathing enthusiasts: Transparent design, enjoy sunbathing."
                },
                product10: {
                    name: "Winter Donut Fort",
                    description: "Let your cat experience the joy of being a warm custard bun!",
                    features: "Shy and introverted cats: Enclosed design provides security.\nMulti-cat homes: Donut shape perfect for cat cuddling.\nCute decor collectors: Adorable shape adds fun to home decor."
                }
            }
        },
        footer: {
            aboutUs: "About Us",
            quickLinks: "Quick Links",
            home: "Back to Home",
            privacy: "Privacy Policy",
            contact: "Contact Us",
            contactInfo: "Contact Information",
            description: "Cat Nest Home is committed to providing your cat with a warm and comfortable rest space, allowing them to enjoy their happy moments."
        }
    }
};

const i18n = {
    currentLanguage: 'en',
    
    initLanguage() {
        this.switchLanguage('en');
    },

    switchLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            document.documentElement.setAttribute('lang', lang);
            this.updateContent();
            console.log('Language switched to:', lang);
        }
    },

    updateContent() {
        try {
            const elements = document.querySelectorAll('[data-i18n]');
            console.log('Found elements to update:', elements.length);
            
            elements.forEach(element => {
                const keys = element.getAttribute('data-i18n').split('.');
                let value = translations[this.currentLanguage];
                
                for (const key of keys) {
                    if (value && value[key]) {
                        value = value[key];
                    } else {
                        console.log('Translation not found for:', keys.join('.'));
                        value = null;
                        break;
                    }
                }
                
                if (value !== null) {
                    if (element.tagName === 'INPUT') {
                        if (element.type === 'submit' || element.type === 'button') {
                            element.value = value;
                        } else {
                            element.placeholder = value;
                        }
                    } else {
                        element.textContent = value;
                    }
                }
            });
            console.log('Content updated successfully');
        } catch (error) {
            console.error('Error updating content:', error);
        }
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Content Loaded - Initializing language');
        i18n.initLanguage();
    });
} else {
    console.log('DOM already loaded - Initializing language');
    i18n.initLanguage();
} 