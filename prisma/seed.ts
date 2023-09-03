import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
            name: 'Graphic Desin',
            price: 50,
            amount: 2,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ligula at nisi feugiat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque odio sem, vehicula id convallis a, luctus sed odio. Praesent commodo ex nec lorem fermentum convallis. Nunc et dolor porttitor, convallis enim quis, facilisis arcu. Integer efficitur diam dui, sed egestas lectus malesuada eu. Aenean imperdiet tempor felis sit amet auctor. Mauris sodales gravida purus, nec malesuada lorem cursus vehicula. Vivamus a blandit magna. Etiam accumsan, erat ac lobortis ullamcorper, massa augue iaculis ex, ut malesuada tortor libero quis velit. Ut commodo enim quis quam dignissim, sed tincidunt lorem tincidunt. Vestibulum velit nulla, semper nec nulla eget, lacinia imperdiet turpis. Pellentesque placerat interdum dignissim. Fusce sodales tortor vitae erat mollis, lacinia ullamcorper erat ultrices. In consequat, massa quis scelerisque aliquet, elit justo luctus turpis, sollicitudin interdum dui eros sed odio. Fusce sed ipsum eget lorem consequat auctor.',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
            name: '1000 Chairs',
            price: 75,
            amount: 3,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ligula at nisi feugiat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque odio sem, vehicula id convallis a, luctus sed odio. Praesent commodo ex nec lorem fermentum convallis. Nunc et dolor porttitor, convallis enim quis, facilisis arcu. Integer efficitur diam dui, sed egestas lectus malesuada eu. Aenean imperdiet tempor felis sit amet auctor. Mauris sodales gravida purus, nec malesuada lorem cursus vehicula. Vivamus a blandit magna. Etiam accumsan, erat ac lobortis ullamcorper, massa augue iaculis ex, ut malesuada tortor libero quis velit. Ut commodo enim quis quam dignissim, sed tincidunt lorem tincidunt. Vestibulum velit nulla, semper nec nulla eget, lacinia imperdiet turpis. Pellentesque placerat interdum dignissim. Fusce sodales tortor vitae erat mollis, lacinia ullamcorper erat ultrices. In consequat, massa quis scelerisque aliquet, elit justo luctus turpis, sollicitudin interdum dui eros sed odio. Fusce sed ipsum eget lorem consequat auctor.',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
            name: 'The lost symbol',
            price: 25,
            amount: 3,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ligula at nisi feugiat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque odio sem, vehicula id convallis a, luctus sed odio. Praesent commodo ex nec lorem fermentum convallis. Nunc et dolor porttitor, convallis enim quis, facilisis arcu. Integer efficitur diam dui, sed egestas lectus malesuada eu. Aenean imperdiet tempor felis sit amet auctor. Mauris sodales gravida purus, nec malesuada lorem cursus vehicula. Vivamus a blandit magna. Etiam accumsan, erat ac lobortis ullamcorper, massa augue iaculis ex, ut malesuada tortor libero quis velit. Ut commodo enim quis quam dignissim, sed tincidunt lorem tincidunt. Vestibulum velit nulla, semper nec nulla eget, lacinia imperdiet turpis. Pellentesque placerat interdum dignissim. Fusce sodales tortor vitae erat mollis, lacinia ullamcorper erat ultrices. In consequat, massa quis scelerisque aliquet, elit justo luctus turpis, sollicitudin interdum dui eros sed odio. Fusce sed ipsum eget lorem consequat auctor.',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
            name: '4 books set',
            price: 200,
            amount: 3,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ligula at nisi feugiat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque odio sem, vehicula id convallis a, luctus sed odio. Praesent commodo ex nec lorem fermentum convallis. Nunc et dolor porttitor, convallis enim quis, facilisis arcu. Integer efficitur diam dui, sed egestas lectus malesuada eu. Aenean imperdiet tempor felis sit amet auctor. Mauris sodales gravida purus, nec malesuada lorem cursus vehicula. Vivamus a blandit magna. Etiam accumsan, erat ac lobortis ullamcorper, massa augue iaculis ex, ut malesuada tortor libero quis velit. Ut commodo enim quis quam dignissim, sed tincidunt lorem tincidunt. Vestibulum velit nulla, semper nec nulla eget, lacinia imperdiet turpis. Pellentesque placerat interdum dignissim. Fusce sodales tortor vitae erat mollis, lacinia ullamcorper erat ultrices. In consequat, massa quis scelerisque aliquet, elit justo luctus turpis, sollicitudin interdum dui eros sed odio. Fusce sed ipsum eget lorem consequat auctor.',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
            name: 'Harry Potter First Volume',
            price: 49,
            amount: 20,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ligula at nisi feugiat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque odio sem, vehicula id convallis a, luctus sed odio. Praesent commodo ex nec lorem fermentum convallis. Nunc et dolor porttitor, convallis enim quis, facilisis arcu. Integer efficitur diam dui, sed egestas lectus malesuada eu. Aenean imperdiet tempor felis sit amet auctor. Mauris sodales gravida purus, nec malesuada lorem cursus vehicula. Vivamus a blandit magna. Etiam accumsan, erat ac lobortis ullamcorper, massa augue iaculis ex, ut malesuada tortor libero quis velit. Ut commodo enim quis quam dignissim, sed tincidunt lorem tincidunt. Vestibulum velit nulla, semper nec nulla eget, lacinia imperdiet turpis. Pellentesque placerat interdum dignissim. Fusce sodales tortor vitae erat mollis, lacinia ullamcorper erat ultrices. In consequat, massa quis scelerisque aliquet, elit justo luctus turpis, sollicitudin interdum dui eros sed odio. Fusce sed ipsum eget lorem consequat auctor.',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
            name: 'The Worls Atlas of Coffee',
            price: 250,
            amount: 1,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ligula at nisi feugiat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque odio sem, vehicula id convallis a, luctus sed odio. Praesent commodo ex nec lorem fermentum convallis. Nunc et dolor porttitor, convallis enim quis, facilisis arcu. Integer efficitur diam dui, sed egestas lectus malesuada eu. Aenean imperdiet tempor felis sit amet auctor. Mauris sodales gravida purus, nec malesuada lorem cursus vehicula. Vivamus a blandit magna. Etiam accumsan, erat ac lobortis ullamcorper, massa augue iaculis ex, ut malesuada tortor libero quis velit. Ut commodo enim quis quam dignissim, sed tincidunt lorem tincidunt. Vestibulum velit nulla, semper nec nulla eget, lacinia imperdiet turpis. Pellentesque placerat interdum dignissim. Fusce sodales tortor vitae erat mollis, lacinia ullamcorper erat ultrices. In consequat, massa quis scelerisque aliquet, elit justo luctus turpis, sollicitudin interdum dui eros sed odio. Fusce sed ipsum eget lorem consequat auctor.',
        },
    ];
}

function getImages() {
    return [
        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f790',
            url: 'https://images.pexels.com/photos/3747260/pexels-photo-3747260.jpeg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
        },
        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f791',
            url: 'https://images.pexels.com/photos/4238505/pexels-photo-4238505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            productId: '4fd105551-0f0d-4a9f-bc41-c559c8a17261',
        },
        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f792',
            url: 'https://images.pexels.com/photos/17192492/pexels-photo-17192492/free-photo-of-drewno-kawa-biznes-antyczny.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
        },
        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f793',
            url: 'https://images.pexels.com/photos/3248644/pexels-photo-3248644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
        },
        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f794',
            url: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
        },
        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f795',
            url: 'https://images.pexels.com/photos/2187601/pexels-photo-2187601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
        },

        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f796',
            url: 'https://images.pexels.com/photos/11984977/pexels-photo-11984977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
        },
        {
            id: '28b1a2de-a1d9-41e8-955e-8df8d568f797',
            url: 'https://images.pexels.com/photos/1424874/pexels-photo-1424874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
        },
    ];
}

async function seed() {
    await Promise.all(
        getProducts().map((product) => {
            return db.product.create({ data: product });
        }),
    );

    await Promise.all(
        getImages().map((image) => {
            return db.image.create({ data: image });
        }),
    );
}

seed();