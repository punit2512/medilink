delete from USER_AUTHORITY;
DELETE from authority;
delete from application_user;

INSERT INTO authority  VALUES(1,'PATIENT');
INSERT INTO authority VALUES(2,'PROVIDER');
INSERT INTO authority VALUES(3,'PROVIDER_ADMIN');
INSERT INTO authority VALUES(4,'APP_ADMIN');


INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password) VALUES(1,b'1','vikasmalik','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password) VALUES(2,b'1','margaretmcnamara','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password)  VALUES(3,b'1','honggao','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER (user_id, enabled, user_name, password) VALUES(4,b'1','danielchandler','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password)  VALUES(5,b'1','christineodell','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER (user_id, enabled, user_name, password) VALUES(6,b'1','ralphvetters','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');




INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password) VALUES(7,b'1','nitinarora','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password) VALUES(8,b'1','rajaraman','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password)  VALUES(9,b'1','punitmishra','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');
INSERT INTO APPLICATION_USER(user_id, enabled, user_name, password)  VALUES(10,b'1','aparnaraman','$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.');




INSERT INTO USER_AUTHORITY VALUE (1,2);
INSERT INTO USER_AUTHORITY VALUE (2,2);
INSERT INTO USER_AUTHORITY VALUE (3,2);

INSERT INTO USER_AUTHORITY VALUE (4,2);
INSERT INTO USER_AUTHORITY VALUE (5,2);

INSERT INTO USER_AUTHORITY VALUE (6,2);
INSERT INTO USER_AUTHORITY VALUE (1,1);
INSERT INTO USER_AUTHORITY VALUE (7,1);

INSERT INTO USER_AUTHORITY VALUE (8,1);
INSERT INTO USER_AUTHORITY VALUE (7,1);
INSERT INTO USER_AUTHORITY VALUE (10,1);

INSERT INTO USER_AUTHORITY VALUE (1,4);
INSERT INTO USER_AUTHORITY VALUE (7,4);

INSERT INTO USER_AUTHORITY VALUE (8,4);
INSERT INTO USER_AUTHORITY VALUE (9,4);
INSERT INTO USER_AUTHORITY VALUE (10,4);


delete from oauth_client_details;
INSERT INTO oauth_client_details VALUES('practice','practice', '$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.', 'read,write', 'password,authorization_code,implicit,client_credentials', null, 'APP_ADMIN', 7200, 0, NULL, 'true');
INSERT INTO oauth_client_details VALUES('medilink','medilink', '$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.', 'read,write', 'password,authorization_code,refresh_token,implicit,client_credentials', 'http://127.0.0.1', 'APP_ADMIN', 7200, 0, NULL, 'true');

INSERT INTO oauth_client_details VALUES('appointment','appointment', '$2a$10$eNxZ4GEdBL6KJMPT09DWeOI4FY51vvQZqKmyzd6CzYcJQCaUMeXM.', 'read,write', 'password,authorization_code,implicit,client_credentials', 'http://127.0.0.1', 'APP_ADMIN', 7200, 0, NULL, 'true');

commit;