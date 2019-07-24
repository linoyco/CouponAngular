export class Coupon{

    public constructor (
        public id: number,
        public title?: string,
        public startDate?: Date,
        public endDate?: Date,
        public amount?: number,
        public message?: string,
        public price?: number,
        public image?: string,
        // public type: CouponType
    ){ }

}