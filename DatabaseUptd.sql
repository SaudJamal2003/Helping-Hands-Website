create table donationsystem.users(
	user_id int auto_increment,
    first_name varchar(25),
    email varchar(50),
    usr_password varchar(10),
    registration_date Date,
    primary key(user_id, first_name)
);

create table donationsystem.foundations(
	foundation_id int auto_increment primary key,
    foundation_name varchar(50),
    foundation_owner_name varchar(20),
    foundation_description text,
    address varchar(50),
    location_id varchar(3),
    constraint location_fk foreign key (location_id) references donationsystem.locations(location_id)
);


create table donationsystem.donations(
	donation_id int primary key auto_increment,
	user_id int,
	foundation_name varchar(25),
	donation_type varchar(10),
    donation_date Date,
    donation_time time,
    amount int default NULL,
	CONSTRAINT user_name FOREIGN KEY (user_id) REFERENCES donationsystem.users(user_id)
 );
 
 create table donationsystem.locations(
	location_id varchar(3) primary key,
    city_name varchar(20),
    zip_code int(5),
    province varchar(20)
);

create table donationsystem.volunteers(
	volunteer_id int auto_increment primary key,
    volunteer_name varchar(25),
    foundation_id int,
    email varchar(25),
    registration_date Date,
    _status varchar(7) default 'Pending',
    constraint foundationId foreign key (foundation_id) references donationsystem.foundations (foundation_id)
);

-- drop table donationsystem.volunteers;

create table donationsystem.CashDonation(
	payment_id int auto_increment primary key,
	card_number int(16),
--     Card_Holder varchar(25),
    expiry_date Date,
    CVC_code varchar(4),
    amount int,
    address varchar(50),
    state varchar(20),
    zip_code int,
    paymentDate Date,
    payment_time time,
    foundation_id int,
    constraint cashFoundationId foreign key (foundation_id) references donationsystem.foundations(foundation_id)
);

create table user_card(
    card_number int(16) primary key,
    Card_Holder varchar(25)
);

create table donationsystem.ClothDonation(
	cd_id int auto_increment primary key,
	pickup_location varchar(25),
    donation_date date,
    donation_time time,
    quantity int,
    city varchar(20),
    zip_code int,
	foundation_id int,
    constraint clothFoundationId foreign key (foundation_id) references donationsystem.foundations(foundation_id)
);

create table donationsystem.FoodDonation(
	fd_id int primary key auto_increment,
	pickup_location varchar(25),
    donation_date date,
    donation_time time,
    quantity int,
    city varchar(20),
    zip_code int,
	foundation_id int,
    constraint FoodFoundationId foreign key (foundation_id) references donationsystem.foundations(foundation_id)
);

alter table donationsystem.cashdonation modify CVC_code int;

select * from donationsystem.FoodDonation;
select * from donationsystem.CashDonation;
select * from donationsystem.user_card;
select * from donationsystem.ClothDonation;
select * from donationsystem.donations;
select * from donationsystem.volunteers;
select * from donationsystem.users;
select * from donationsystem.foundations;
select * from donationsystem.locations;

delete from donationsystem.foundations where foundation_id = 16;
update donationsystem.foundations set foundation_name = 'JDC Welfare' where foundation_id = 2;

delete from donationsystem.foundations where foundation_id=6;

alter table donationsystem.foundations add column foundation_password varchar(25) default '1234';
alter table donationsystem.volunteers add column _status varchar(20) default 'Pending';

select * from donationsystem.volunteers v inner join donationsystem.foundations f where v.foundation_id = f.foundation_id and v.volunteer_name like 'Taha' and f.foundation_id in (
	select f.foundation_id from donationsystem.foundations where f.email = 'alkhidmat@mail.com');


select * from donationsystem.volunteers v inner join donationsystem.foundations f where v.foundation_id = f.foundation_id and v.volunteer_name like 'Taha' and f.foundation_id in (
select f.foundation_id from donationsystem.foundations f where f.email like 'alkhidmat@mail.com');

SET SQL_SAFE_UPDATES = 0;
delete from donationsystem.volunteers where volunteer_name = 'Sami';
insert into 
donationsystem.volunteers values
(8, 'Sami', 3, 'jsaud7308@gmail.com', '2023-05-10', 'Pending');
alter table donationsystem.foundations add email varchar(50);
alter table donationsystem.foundations drop _status;
update donationsystem.foundations
set email= 'humanityfirst@mail.com'
where foundation_id = 4;

-- Drop table donationsystem.users;
-- Drop table donationsystem.foundations;
-- Drop table donationsystem.volunteers;
-- Drop table donationsystem.locations;
-- Drop table donationsystem.donations;
-- Drop table donationsystem.CashDonation;
-- Drop table donationsystem.ClothDonation;
-- Drop table donationsystem.FoodDonation;
-- Drop table donationsystem.user_card;

insert into donationsystem.locations(location_id, city_name, zip_code, province)
values('KHI', 'Karachi', 05444, 'Sindh');
insert into donationsystem.locations(location_id, city_name, zip_code, province)
values('LHR', 'Lahore', 12542, 'Punjab');
insert into donationsystem.locations(location_id, city_name, zip_code, province)
values('ISL', 'Islamabad', 01394, 'Punjab');
insert into donationsystem.locations(location_id, city_name, zip_code, province)
values('MUL', 'Multan', 04643, 'Punjab');
insert into donationsystem.locations(location_id, city_name, zip_code, province)
values('PSh', 'Peshawar', 04943, 'KPK');

insert into donationsystem.foundations(foundation_id, foundation_name, foundation_owner_name, foundation_description, address, location_id)
values ('5', 'Saylani Welfare Trust', 'Maulana Bashir Ahmed', 
		'Saylani Welfare Trust is a non-profit organization based in Pakistan, 
        dedicated to providing humanitarian aid, healthcare services, and 
        educational support to those in need. It focuses on uplifting underprivileged 
        communities and has a widespread impact through various social welfare programs.', 'Bahdurabad', 'KHI');
        
insert into donationsystem.foundations(foundation_id, foundation_name, foundation_owner_name, foundation_description, address, location_id)
values ('2', 'JDC', 'Syed Zafar Abbas', 
		'JDC’s started working in 2009 from a small camp that provided rescue and disaster management services.
        It expanded its branches and succeeded to establish an effective infrastructure
        that deals with social services, and welfare nationwide. To manifest this into reality,
        JDC has been working tirelessly.', 'B-24, Federal-B Area', 'KHI');
        
insert into donationsystem.foundations(foundation_id, foundation_name, foundation_owner_name, foundation_description, address, location_id)
values ('3', 'Al-Khidmat', 'Syed Zafar Abbas', 
		'Alkhidmat Foundation is one of the leading,
        non-profit organization, fully dedicated to 
        humanitarian services since 1990. It expanded its 
        branches and succeeded to establish an effective infrastructure
        that deals with social services', ' Khayaban-e-Jinnah', 'LHR');
        
insert into donationsystem.foundations(foundation_id, foundation_name, foundation_owner_name, foundation_description, address, location_id)
values ('4', 'Humanity First', 'Amaar Khan', 
		'It expanded its branches and succeeded to establish an effective infrastructure
        that deals with social services, and welfare nationwide. Humanity First is a non-profit organization based in Pakistan, 
        dedicated to providing humanitarian aid, healthcare services, and 
        educational support to those in need. It focuses on uplifting underprivileged 
        communities and has a widespread impact through various social welfare programs.', ' ChaarMinar', 'PSH');
        
